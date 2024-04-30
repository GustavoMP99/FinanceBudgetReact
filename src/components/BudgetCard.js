import { Card } from "react-bootstrap/esm";
import { currencyFormatter } from "../utils";

export default function BudgetCard({name,amount,max}) {
  return (
    <div>
      <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
                <div>{currencyFormatter.format(amount)} /{currencyFormatter.format(max)}</div>
            </Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}
