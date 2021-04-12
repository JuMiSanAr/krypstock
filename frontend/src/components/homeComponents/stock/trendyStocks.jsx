import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"


const TrendyStocks = ({stock_volume}) => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Trendy Stocks Today</h3>
            <StockTable id="trendy-stocks">
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
                    stock_volume.map((company, index) => {
                        return (
                            <tr key={index}>
                        <td>{company.companyName}</td>
                        <td>{company.latestPrice.toFixed(2)}</td>
                        <td>{company.changePercent ? company.changePercent.toFixed(2) : '0.00' }</td>
                        <td>{company.volume}</td>
                            </tr>
                        )
                    })
                }

                    {/*<tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>*/}
                </tbody>
            </StockTable>
        </ShrinkingComponentWrapper>
    )
}

export default TrendyStocks