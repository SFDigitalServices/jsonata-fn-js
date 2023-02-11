# jsonata-fn-js
JSONATA API Serverless Function

## About JSONata
[JSONata](https://jsonata.org/) is query and transformation language.
[[try](http://try.jsonata.org/)] [[documentation](http://docs.jsonata.org/)]
* Lightweight query and transformation language for JSON data
* Inspired by the location path semantics of XPath 3.1
* Sophisticated query expressions with minimal syntax
* Built in operators and functions for manipulating and combining data
* Create user-defined functions
* Format query results into any JSON output structure

## Usage

### Example
Request with `jsonata` as query parameter and data in POST body
```
curl --request POST 'http://localhost:7071/api/eval?jsonata={%22sum%22:%20$sum(Account.Order.Product.(Price%20*%20Quantity))}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "Account": {
    "Account Name": "Firefly",
    "Order": [
      {
        "OrderID": "order103",
        "Product": [
          {
            "Product Name": "Bowler Hat",
            "ProductID": 858383,
            "SKU": "0406654608",
            "Description": {
              "Colour": "Purple",
              "Width": 300,
              "Height": 200,
              "Depth": 210,
              "Weight": 0.75
            },
            "Price": 134.45,
            "Quantity": 2
          },
          {
            "Product Name": "Trilby hat",
            "ProductID": 858236,
            "SKU": "0406634348",
            "Description": {
              "Colour": "Orange",
              "Width": 300,
              "Height": 200,
              "Depth": 210,
              "Weight": 0.6
            },
            "Price": 21.67,
            "Quantity": 1
          }
        ]
      },
      {
        "OrderID": "order104",
        "Product": [
          {
            "Product Name": "Bowler Hat",
            "ProductID": 858383,
            "SKU": "040657863",
            "Description": {
              "Colour": "Purple",
              "Width": 300,
              "Height": 200,
              "Depth": 210,
              "Weight": 0.75
            },
            "Price": 34.45,
            "Quantity": 4
          },
          {
            "ProductID": 345664,
            "SKU": "0406654603",
            "Product Name": "Cloak",
            "Description": {
              "Colour": "Black",
              "Width": 30,
              "Height": 20,
              "Depth": 210,
              "Weight": 2
            },
            "Price": 107.99,
            "Quantity": 1
          }
        ]
      }
    ]
  }
}'
```
Response
```
{
  "sum": 536.36
}
```
Request with `jsonata` and `data` in POST body
```
curl --location --request POST 'http://localhost:7071/api/eval' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonata": "{'\''sum'\'': $sum(Account.Order.Product.(Price * Quantity))}",
    "data": {
        "Account": {
            "Account Name": "Firefly",
            "Order": [
                {
                    "OrderID": "order103",
                    "Product": [
                        {
                            "Product Name": "Bowler Hat",
                            "ProductID": 858383,
                            "SKU": "0406654608",
                            "Description": {
                                "Colour": "Purple",
                                "Width": 300,
                                "Height": 200,
                                "Depth": 210,
                                "Weight": 0.75
                            },
                            "Price": 134.45,
                            "Quantity": 2
                        },
                        {
                            "Product Name": "Trilby hat",
                            "ProductID": 858236,
                            "SKU": "0406634348",
                            "Description": {
                                "Colour": "Orange",
                                "Width": 300,
                                "Height": 200,
                                "Depth": 210,
                                "Weight": 0.6
                            },
                            "Price": 21.67,
                            "Quantity": 1
                        }
                    ]
                },
                {
                    "OrderID": "order104",
                    "Product": [
                        {
                            "Product Name": "Bowler Hat",
                            "ProductID": 858383,
                            "SKU": "040657863",
                            "Description": {
                                "Colour": "Purple",
                                "Width": 300,
                                "Height": 200,
                                "Depth": 210,
                                "Weight": 0.75
                            },
                            "Price": 34.45,
                            "Quantity": 4
                        },
                        {
                            "ProductID": 345664,
                            "SKU": "0406654603",
                            "Product Name": "Cloak",
                            "Description": {
                                "Colour": "Black",
                                "Width": 30,
                                "Height": 20,
                                "Depth": 210,
                                "Weight": 2
                            },
                            "Price": 107.99,
                            "Quantity": 1
                        }
                    ]
                }
            ]
        }
    }
}'
```
Response
```
{
  "sum": 536.36
}
```