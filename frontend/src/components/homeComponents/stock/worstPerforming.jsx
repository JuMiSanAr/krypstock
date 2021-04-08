import { FormSelectWrapper } from "../../../styles/components/cryptoStyles/bitCoinStyles";
/*import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";*/
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"


const WorstPerformingStocks = ({loss_stock}) => {
 console.log("top performing stock", loss_stock)
    return (
        <ShrinkingComponentWrapper>
            <FormSelectWrapper>
                <div className="title">
                    <h3>Top 10 loss stocks</h3>
                </div>
            </FormSelectWrapper>
            <StockTable id="top-performing">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Change %</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                {
                    loss_stock.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.companyName}</td>
                                <td>{data.latestPrice}</td>
                                <td>{data.changePercent}</td>
                                <td>{data.volume}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </StockTable>
        </ShrinkingComponentWrapper>
    )
}

export default WorstPerformingStocks;