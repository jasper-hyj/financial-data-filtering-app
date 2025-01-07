# Tesc.ucsd.edu api documentation

---

## Public Apis

<details>
 <summary><code>GET</code> <code><b>/</b>api<b>/</b>org</code></summary>

##### Responses

> | code  | content-type       | response                      |
> | ----- | ------------------ | ----------------------------- |
> | `200` | `application/json` | `Array with JSON of all orgs` |

</details>

<details>
<summary><code>GET</code> <code><b>/</b>api<b>/</b>org<b>/</b>{id}</code></summary>

##### Path Variables & Request Parameters

> | name | type         | required? | data type | description       |
> | ---- | ------------ | --------- | --------- | ----------------- |
> | id   | PathVariable | yes       | UUID      | Organization's Id |

##### Responses

> | code  | content-type       | response                                   |
> | ----- | ------------------ | ------------------------------------------ |
> | `200` | `application/json` | `JSON of Organization Object`              |
> | `404` | `application/json` | `{"code":"404","message":"Org Not Found"}` |

</details>

---

## Private Apis

<details>
 <summary><code>GET</code> <code><b>/</b>auth<b>/</b>api<b>/</b>role</code></summary>

##### Path Variables & Request Parameters

> | name | type | data type | description |
> | ---- | ---- | --------- | ----------- |

##### Responses

> | code  | content-type       | response                       |
> | ----- | ------------------ | ------------------------------ |
> | `200` | `application/json` | `Array with JSON of all roles` |

</details>

<details>
 <summary><code>GET</code> <code><b>/</b>auth<b>/</b>api<b>/</b>role<b>/</b>{id}</code></summary>

##### Path Variables & Request Parameters

> | name | type     | data type | description |
> | ---- | -------- | --------- | ----------- |
> | id   | required | string    | Role's Id   |

##### Responses

> | code  | content-type       | response                       |
> | ----- | ------------------ | ------------------------------ |
> | `200` | `application/json` | `Array with JSON of all roles` |

</details>

<details>
<summary><code>GET</code> <code>/auth/api/purchase</code></summary>

##### Retrieves All purchase information

> `FINANCE`, `IDEA_ADVISOR` (All purchase)
> `ORGANIZATION` (Organization's purchase)

##### Path Variables & Request Parameters

> | name           | type         | required? | data type | description       |
> | -------------- | ------------ | --------- | --------- | ----------------- |
> | organizationId | RequestParam | no        | UUID      | Organization's Id |

##### Responses

> | code  | content-type       | response                         |
> | ----- | ------------------ | -------------------------------- |
> | `200` | `application/json` | Array with JSON of all purchases |
> | ``    |                    |                                  |

</details>

<details>
<summary><code>GET</code> <code>/auth/api/purchase/{id}</code></summary>

##### Retrieves All purchase information

> Role: `FINANCE`

##### Path Variables & Request Parameters

> | name | type     | data type | description   |
> | ---- | -------- | --------- | ------------- |
> | id   | required | UUID      | Purchase's Id |

##### Responses

> | code  | content-type       | response                     | example |
> | ----- | ------------------ | ---------------------------- | ------- |
> | `200` | `application/json` | Array with JSON of all roles | `{}`    |

</details>
