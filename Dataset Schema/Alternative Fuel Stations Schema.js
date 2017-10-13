/*This file was created for Terratap-Technologies-Inc by Cody Clattenburg, Sam Collins, Martin Suryadi, and Sergio Josue Villegas. This file is under the protection of the Apache 2.0 License.*/

{
  "geometry": {
    "coordinates": {
      "items": {
        "type": "float",
				"example": 49.222
      },
      "type": "array",
			"example": [49.222, -122.222]
    },
    "type": {
      "type": "String",
			"example": "Point",
			"description": "This indicates that the station is geologically a Point."
    }
  },
  "properties": {
    "fuelType": {
      "type": "string",
			"example": "Hydrogen"
    },
    "name": {
      "type": "string",
			"example": "Bob's Charging Station",
			"default": "Name Unavailible"
    },
    "address": {
      "type": "string",
			"example": "123 West Rd",
			"default": "Address Unavailible"
    },
	  "access": {
	    "type": "string",
			"example": "City Vehicle use only",
			"default": "Public"
	  }
  },
}
"type": "object"
