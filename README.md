# Overview

This project is a lightweight logging server that save values and returns sum of total values that have been submitted in the last hour.

This server can save and process values for different keys.

# Demo

Live demo: [https://deepsolutions-assignment.herokuapp.com/](https://deepsolutions-assignment.herokuapp.com/)

# Structure

- **Controllers**: All the main processes are in this layer.
- **Storage**: Variables and objects that store data are implemented in this layer.
- **Routes**: All http requests are implemented in this layer.
- **bin**: The layer which runs the project and deals with network.

# API

## Save New Value

POST: `/metric/{{key}}`

### Body

```json
{
   "value":Number
}
```

### Successful Response

*200 OK*

```json
{}
```

## Get Total Value of a Key

GET: `/metric/{{key}}/sum` 

### Successful Response

```json
{
	"value":Number
}
```
