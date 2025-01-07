# financial-data-filtering-app API documentation

---

## Public APIs

<details>
 <summary><code>GET</code> <code>/api/data/aapl</code></summary>

##### Path Variables & Request Parameters

> | name              | type         | required? | data type | description       |
> | ----------------- | ------------ | --------- | --------- | ----------------- |
> | start_year        | QueryParam   | no        | int       | Start year for filtering (e.g., 2020) |
> | end_year          | QueryParam   | no        | int       | End year for filtering (e.g., 2024) |
> | revenue_min       | QueryParam   | no        | int       | Minimum revenue for filtering |
> | revenue_max       | QueryParam   | no        | int       | Maximum revenue for filtering |
> | net_income_min    | QueryParam   | no        | int       | Minimum net income for filtering |
> | net_income_max    | QueryParam   | no        | int       | Maximum net income for filtering |
> | sort_by           | QueryParam   | no        | string    | Sort by column (`date`, `revenue`, or `netIncome`) |
> | sort_order        | QueryParam   | no        | string    | Sort order (`asc` or `desc`) |

##### Responses

> | code  | content-type       | response                      |
> | ----- | ------------------ | ----------------------------- |
> | `200` | `application/json` | Array of filtered and sorted income statement data for AAPL, including the following fields: |
> |       |                    | `date`, `revenue`, `netIncome`, `grossProfit`, `eps`, `operatingIncome` |

</details>

---