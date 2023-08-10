full_data_string = "All Data"
animateGraph = false; // determines whether lines will animate

// Client for new data source setup (CMD program)
// name, filepath, min/max year, csv header/column names (groups) with colors

ccc_dataSources = [
    {
        "name": "interestRate",
        "title": "Interest Rate",
        "y-axis": "Annual Interest Rate (%)",
        "generative_func": "generateGraph('interestRate')",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-rate-金融-CN实际利率.csv",
        "min_year": 1980,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：实际利率": true
        },
        "line_names": [
            "Annual interest rate"
        ]
    },
    {
        "name": "incomePerCapita",
        "title": "Income and Expenditure Per Capita: YTD",
        "y-axis": "RMB",
        "dates": "month",
        "generative_func": "generateGraph('incomePerCapita')",
        "selected": true,
        "filepath":"data/social/CEIC-population-income-人口-城市农村人均收支.csv",
        "min_year": 1995,
        "max_year": 2014,
        "groups": {
            "All Data": true
        },
        "columns": {
            "人均收入：年初至今：城镇居民：36座城市平均": true,
            "人均可支配收入：年初至今：城镇居民：36座城市平均": true,
            "人均支出：年初至今：城镇居民：36座城市平均": true,
            "人均生活开支：年初至今：城镇居民：36座城市平均": true,
            "人均现金收入：年初至今：农村居民家庭（RH）": true,
            "人均现金支出：年初至今：农村居民家庭（RH）": true
        },
        "line_names": [
            "Income per capita: urban resident: 36 cities average",
            "Disposable income per capita: urban, 36 cities average",
            "Expenditure per capita: urban: 36 cities average",
            "Living expenditure per capita: Urban: 36 cities average",
            "Cash income per capita: rural households",
            "Cash expenditures per capita: rural households"
        ]
    },
    {
        "name": "arableLand",
        "title": "Arable Land",
        "y-axis": "Hectares",
        "generative_func": "generateGraph('arableLand')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-land-经济-CN耕地面积.csv",
        "min_year": 1961,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：耕地面积": true
        },
        "line_names": [
            "Arable land area"
        ]
    },
    {
        "name": "energyConsumption",
        "title": "Energy Consumption",
        "y-axis": "",
        "generative_func": "generateGraph('energyConsumption')",
        "selected": true,
        "filepath":"data/CEIC-envorinment-consumption-环境-能源消费.csv",
        "min_year": 1990,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：Total Primary Energy Supply": true,
            "CN：能源消耗：占能源总消费百分比：农业": true,
            "CN：能源消耗：占能源总消费百分比：工业": true,
            "CN：能源消耗：占能源总消费百分比：服务业": true,
            "CN：能源消耗：占能源总消费百分比：交通运输": true,
            "CN：能源消耗：占能源总消费百分比：其他行业": true
        },
        "line_names": [
            "Total primary energy supply (millions of tons)",
            "% of total energy consumption: agriculture (%)",
            "% of total energy consumption: industry (%)",
            "% of total energy consumption: services (%)",
            "% of total energy consumption: transportation (%)",
            "% of total energy consumption: other (%)"
        ]
    },
    {
        "name": "shenzhenStockExchange",
        "title": "Shenzhen Stock Exchange Turnover Value",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('shenzhenStockExchange')",
        "dates": "month",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-shenzhen-金融-深圳证券交易所.csv",
        "min_year": 1991,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "成交量：值：深圳证券交易所": true
        },
        "line_names": [
            "Turnover value"
        ]
    },
    {
        "name": "carbonEmissions",
        "title": "Carbon Emissions: CO2 Productivity",
        "y-axis": "Tons (millions)",
        "generative_func": "generateGraph('carbonEmissions')",
        "selected": true,
        "filepath":"data/CEIC-environment-carbon-环境-碳排放.csv",
        "min_year": 1990,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：CO2 Productivity：Production Based CO2 Emissions": true,
            "CN：CO2 Productivity：Demand Based CO2 Emissions": true
        },
        "line_names": [
            "Production-based emissions",
            "Demand-based emissions"
        ]
    },
    {
        "name": "tourism",
        "title": "International Tourism",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('tourism')",
        "selected": true,
        "filepath":"data/CEIC-econ-tourism-经济-旅游业.csv",
        "min_year": 1995,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：国际旅游：入境人数": true,
            "CN：国际旅游：出境人数": true
        },
        "line_names": [
            "Number of Arrivals",
            "Number of Departures"
        ]
    },
    {
        "name": "airQuality",
        "title": "Air Quality: Mortality from Exposure to Pollutants",
        "y-axis": "Number of people (per 1000000 inhabitants)",
        "generative_func": "generateGraph('airQuality')",
        "selected": true,
        "filepath":"data/CEIC-environment-air-环境-空气质量.csv",
        "min_year": 1990,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：Mean Population Exposure to PM2.5：每立方米": false,
            "CN：Mortality from Exposure to Ambient Ozone：per 1 000 000 Inhabitants": true,
            "CN：Mortality from Exposure to Ambient PM2.5：per 1 000 000 Inhabitants": true,
            "CN：Mortality from Exposure to Lead：per 1 000 000 Inhabitants": true,
            "CN：Mortality from Exposure to Residential Radon：per 1 000 000 Inhabitants": true
        },
        "line_names": [
            "Mean population exposure to PM2.5",
            "Mortality from exposure to ambient ozone",
            "Mortality from Exposure to ambient PM2.5",
            "Mortality from Exposure to lead",
            "Mortality from Exposure to residential radon"
        ]
    },
    {
        "name": "portsTraffic",
        "title": "Cargo Throughput at Major Seaports and River Ports",
        "y-axis": "Tons (millions)",
        "generative_func": "generateGraph('portsTraffic')",
        "dates": "month",
        "selected": true,
        "filepath":"data/transportation/CEIC-transportation-port-交通-货运吞吐量主要海港和河港.csv",
        "min_year": 2001,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "货运吞吐量：主要海港和河港": true
        },
        "line_names": [
            "Cargo throughput"
        ]
    },
    {
        "name": "unemployment",
        "title": "Employment and Unemployment",
        "y-axis": "",
        "generative_func": "generateGraph('unemployment')",
        "dates": "month",
        "selected": true,
        "filepath":"data/social/CEIC-population-employment-人口-就业失业.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "就业": true,
            "已登记失业率：城镇: annual": true,
            "已登记失业率：城镇": true
        },
        "line_names": [
            "Employed (number of people, millions)",
            "Annual registered unemployment rate: urban (%)",
            "Quarterly registered unemployment rate: urban (%)"
        ]
    },
    {
        "name": "electricityProduction",
        "title": "Industrial Production: Electricity",
        "y-axis": "kWh (billions)",
        "generative_func": "generateGraph('electricityProduction')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-power-经济-工业生产电力.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "工业生产：电力": true
        },
        "line_names": [
            "Electricity production"
        ]
    },
    {
        "name": "taxRevenue",
        "title": "Government Tax Revenue",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('taxRevenue')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-government-tax-政府-政府收入税收.csv",
        "min_year": 1995,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "政府收入：税收": true
        },
        "line_names": [
            "Government tax revenue"
        ]
    },
    {
        "name": "propertyPrices",
        "title": "Property Prices",
        "y-axis": "RMB/square meter",
        "generative_func": "generateGraph('propertyPrices')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-price-经济-物业价格.csv",
        "min_year": 2010,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "物业价格：平均": true,
            "物业价格：其他建筑类型": true,
            "物业价格：商业建筑": true,
            "物业价格：办公楼": true,
            "物业价格：经济适用房": true,
            "物业价格：住宅": true,
            "物业价格：住宅：别墅及公寓": true
        },
        "line_names": [
            "Average",
            "Other building prices",
            "Commercial buildings",
            "Office buildings",
            "Affordable housing",
            "Residential",
            "Residential: villas and apartments"
        ]
    },
    {
        "name": "fixedAssetsInvestment",
        "title": "Fixed Assets Investment YTD",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('fixedAssetsInvestment')",
        "dates": "month",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-assets-金融-固定资产投资年初至今.csv",
        "min_year": 1994,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "固定资产投资：年初至今": true
        },
        "line_names": [
            "Fixed assets investment: ytd"
        ]
    },
    {
        "name": "foreignDirectInvestment",
        "title": "Foreign Direct Investment: YTD",
        "y-axis": "USD (millions)",
        "generative_func": "generateGraph('foreignDirectInvestment')",
        "dates": "month",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-invest-金融-外商投资.csv",
        "min_year": 1997,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "外商直接投资：合同总价：年初至今：共计": true,
            "外商直接投资：已动用：年初至今：共计": true
        },
        "line_names": [
            "FDI: total contract price: ytd",
            "FDI: total utilized: ytd"
        ]
    },
    {
        "name": "pmi",
        "title": "Purchasing Managers' Index",
        "y-axis": "Percent",
        "generative_func": "generateGraph('pmi')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-pmi-经济-采购经理指数复合输出.csv",
        "min_year": 2017,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "采购经理指数：复合输出": true
        },
        "line_names": [
            "PMI: composite output"
        ]
    },
    {
        "name": "realEstateArea",
        "title": "Real Estate Area: Commodity Buildings",
        "y-axis": "",
        "generative_func": "generateGraph('realEstateArea')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-property-经济-房地产面积.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "已出售商品建筑：年初至今：共计": true,
            "在建建筑面积：年初至今：商品建筑（CB）": true,
            "已出售建筑面积：商品建筑：年初至今": true
        },
        "line_names": [
            "Total sold: ytd (RMB, millions)",
            "Area under construction: ytd (square meters, thousands)",
            "Floor space sold: ytd (square meters, thousands)"
        ]
    },
    {
        "name": "steelProduction",
        "title": "Industrial Production: Steel",
        "y-axis": "Tons (millions)",
        "generative_func": "generateGraph('steelProduction')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-steel-经济-工业生产钢.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "工业生产：钢": true
        },
        "line_names": [
            "Steel production"
        ]
    },
    {
        "name": "wheatProduction",
        "title": "Agricultural Production: Wheat",
        "y-axis": "Kilotons",
        "generative_func": "generateGraph('wheatProduction')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-wheat-经济-农业产量小麦.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "农业产量：小麦": true
        },
        "line_names": [
            "Wheat production"
        ]
    },
    {
        "name": "riceProduction",
        "title": "Agricultural Production: Rice",
        "y-axis": "Kilotons",
        "generative_func": "generateGraph('riceProduction')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-rice-经济-农业产量米.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "农业产量：米": true
        },
        "line_names": [
            "Rice production"
        ]
    },
    {
        "name": "purchasedLandArea",
        "title": "Purchased Land Area: YTD",
        "y-axis": "Square meters (thousands)",
        "generative_func": "generateGraph('purchasedLandArea')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-land-purchase-经济-土地购买面积年初至今.csv",
        "min_year": 1998,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "土地购买面积：年初至今": true
        },
        "line_names": [
            "Land purchased area"
        ]
    },
    {
        "name": "developedLandArea",
        "title": "Developed Land Area: YTD",
        "y-axis": "Square meters (thousands)",
        "generative_func": "generateGraph('developedLandArea')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-land-development-经济-已开发土地面积年初至今.csv",
        "min_year": 1997,
        "max_year": 2010,
        "groups": {
            "All Data": true
        },
        "columns": {
            "已开发土地面积：年初至今": true
        },
        "line_names": [
            "Developed land area: ytd"
        ]
    },
    {
        "name": "grossNationalIncome",
        "title": "China: Gross National Income",
        "y-axis": "USD (millions)",
        "generative_func": "generateGraph('grossNationalIncome')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-income-经济-CN国民总收入美元.csv",
        "min_year": 1970,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：国民总收入：美元": true
        },
        "line_names": [
            "Gross national income"
        ]
    },
    {
        "name": "householdFlowOfFunds",
        "title": "Flow of Funds: Household Financial Source",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('householdFlowOfFunds')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-flow-经济-资金流家庭来源.csv",
        "min_year": 1992,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "资金流：家庭：来源": true
        },
        "line_names": [
            "Flow of funds: household"
        ]
    },
    {
        "name": "communicationManufacturing",
        "title": "Communication Equipment Manufacturing",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('communicationManufacturing')",
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-electronic-经济-电子制造-通信.csv",
        "min_year": 2010,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "通信设备制造：雇员人数": true,
            "通信设备制造：总资产": true,
            "通信设备制造：制成品：年初至今": true,
            "通信设备制造：总负债": true,
            "通信设备制造：销售收入：年初至今": true,
            "通信设备制造：总利润：年初至今": true,
            "通信设备制造：企业数量": true
        },
        "line_names": [
            "Number of employees",
            "Total assets",
            "Finished goods: ytd",
            "Total liabilities",
            "Sales revenue: ytd",
            "Gross profit: ytd",
            "Number of enterprises"
        ]
    },
    {
        "name": "automobileOutput",
        "title": "Industrial Output: Automobiles",
        "y-axis": "Number of vehicles (thousands)",
        "dates": "month",
        "generative_func": "generateGraph('automobileOutput')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-auto-经济-工业生产汽车.csv",
        "min_year": 1986,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "工业生产：汽车": true
        },
        "line_names": [
            "Automobiles"
        ]
    },
    {
        "name": "agricultureOutput",
        "title": "Gross Output Value: Agriculture",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('agricultureOutput')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-agriculture-经济-总产值农业.csv",
        "min_year": 1952,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "总产值：农业": true
        },
        "line_names": [
            "Gross output value"
        ]
    },
    {
        "name": "agricultureLand",
        "title": "Sown Area of Crops",
        "y-axis": "Hectares (thousands)",
        "generative_func": "generateGraph('agricultureLand')",
        "selected": true,
        "filepath":"data/economy/CEIC-econ-agriculture-land-经济-农作物播种面积.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "农作物播种面积": true
        },
        "line_names": [
            "Sown area of crops"
        ]
    },
    {
        "name": "financeValue",
        "title": "金融-市值",
        "y-axis": "USD (millions)",
        "generative_func": "generateGraph('financeValue')",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-value-金融-市值.csv",
        "min_year": 1993,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN：市值：国内上市公司": true,
            "CN：股票交易：总价值": true
        },
        "line_names": [
            "Market Capitalization: Domestic Listed Companies",
            "Shares Traded: Total Value"
        ]
    },
    {
        "name": "humanDevelopmentIndex",
        "title": "United Nations Human Development Index: China",
        "y-axis": "N/A",
        "generative_func": "generateGraph('humanDevelopmentIndex')",
        "selected": true,
        "filepath":"data/humanDevelopmentIndex.csv",
        "min_year": 1990,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Human Development Index: China": true
        },
        "line_names": [
            "Human Development Index: China"
        ]
    },
    {
        "name": "industrialInventory",
        "title": "China Industrial Inventory",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('industrialInventory')",
        "dates": "month",
        "selected": true,
        "filepath":"data/industrialInventory.csv",
        "min_year": 2010,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Industrial Inventory": true,
            "CN: Industrial Inventory: Coal": true,
            "CN: Industrial Inventory: Petroleum & Natural Gas": true,
            "CN: Industrial Inventory: Ferrous Metal": true,
            "CN: Industrial Inventory: Non Ferrous Metal": true,
            "CN: Industrial Inventory: Non Metal Mineral": true
        },
        "line_names": [
            "All",
            "Coal",
            "Petroleum & natural gas",
            "Ferrous metal",
            "Non-ferrous metal",
            "Non-metal mineral"
        ]
    },
    {
        "name": "industrialSalesValue",
        "title": "China Industrial Sales Value",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('industrialSalesValue')",
        "dates": "month",
        "selected": true,
        "filepath":"data/industrialSalesValue.csv",
        "min_year": 1992,
        "max_year": 2013,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Industrial Sales Value": true,
            "CN: Industrial Sales Value: Light Industry": true,
            "CN: Industrial Sales Value: Heavy Industry": true
        },
        "line_names": [
            "Industiral sales value",
            "Industiral sales value: light industry",
            "Industiral sales value: heavy industry"
        ]
    },
    {
        "name": "industrialProduction",
        "title": "China Industrial Production: Crude Coal, Crude Oil, and Iron Ore",
        "y-axis": "Tons (thousands)",
        "generative_func": "generateGraph('industrialProduction')",
        "dates": "month",
        "selected": true,
        "filepath":"data/industrialProduction.csv",
        "min_year": 1986,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Industrial Production: Crude Coal": true,
            "CN: Industrial Production: Crude Oil": true,
            "CN: Industrial Production: Iron Ore": true
        },
        "line_names": [
            "Crude coal",
            "Crude oil",
            "Iron ore"
        ]
    },
    {
        "name": "covidAsymptomaticCases",
        "title": "COVID-19 Asymptomatic Cases in China",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('covidAsymptomaticCases')",
        "dates": "day",
        "selected": true,
        "filepath":"data/health/covidAsymptomaticCases.csv",
        "min_year": 2020,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "(DC)CN: COVID-19: Asymptomatic Infection: Confirmed": true,
            "(DC)CN: COVID-19: Asymptomatic Infection: under Medical Observation": true,
            "(DC)CN: COVID-19: Asymptomatic Infection: Release Medical Observation": true
        },
        "line_names": [
            "Confirmed cases",
            "Under medical observation",
            "Release medical observation"
        ]
    },
    {
        "name": "covidDeaths",
        "title": "COVID-19 Deaths in China",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('covidDeaths')",
        "dates": "day",
        "selected": true,
        "filepath":"data/health/covidDeaths.csv",
        "min_year": 2023,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: COVID-19: No of Death(From 12/8/2022): COVID-19 Related: To-Date": true,
            "CN: COVID-19: No of Death(From 12/8/2022): Respiratory Failure Caused by COVID-19: To-Date": true,
            "CN: COVID-19: No of Death(From 12/8/2022): Preexisting Illnesses Combined with COVID-19: To-Date": true
        },
        "line_names": [
            "New increase",
            "Confirmed case",
            "Confirmed case: severe"
        ]
    },
    {
        "name": "covidCases",
        "title": "COVID-19 Cases in China",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('covidCases')",
        "dates": "day",
        "selected": true,
        "filepath":"data/health/covidCases.csv",
        "min_year": 2020,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            // "(DC)CN: COVID-19: Confirmed Case: Hospitalized": false,
            "(DC)CN: COVID-19: Confirmed Case: New Increase": true,
            "(DC)CN: COVID-19: Confirmed Case": true,
            "(DC)CN: COVID-19: Confirmed Case: Severe Case": true
        },
        "line_names": [
            // "yes",
            "New increase",
            "Confirmed case",
            "Confirmed case: severe"
        ]
    },
    {
        "name": "healthPersonnel",
        "title": "Number of Health Personnel in China",
        "y-axis": "Number of people (thousands)",
        "generative_func": "generateGraph('healthPersonnel')",
        "selected": true,
        "filepath":"data/health/healthPersonnel.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Licensed Physicians and Physicians Assistants": true,
            "CN: Licensed Physicians": true
        },
        "line_names": [
            "Licensed physicians and physician's assistants",
            "Lisensed physicians"
        ]
    },
    {
        "name": "numberOfTeachers",
        "title": "Number of Full-Time Teachers in China",
        "y-axis": "Number of people (thousands)",
        "generative_func": "generateGraph('numberOfTeachers')",
        "selected": true,
        "filepath":"data/education/numberOfTeachers.csv",
        "min_year": 2000,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: No of Full-time Teacher: Higher Education: Regular Undergraduate and Specialized": true,
            "CN: No of Full-time Teacher: Secondary Education: Regular Secondary School": true,
            "CN: No of Full-time Teacher: Secondary Education: Junior": true,
            "CN: No of Full-time Teacher: Regular Primary School": true,
            "CN: No of Full-time Teacher: Pre-school Education": true
        },
        "line_names": [
            "Higher education: undergraduate and specialized",
            "Secondary education: regular secondary school",
            "Secondary education: junior",
            "Primary school",
            "Pre-school"
        ]
    },
    {
        "name": "nationalBalanceSheet",
        "title": "China National Balance Sheet Assets",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('nationalBalanceSheet')",
        "selected": true,
        "filepath":"data/economy/nationalBalanceSheet.csv",
        "min_year": 2000,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: National Balance Sheet: Asset: Total": true,
            "CN: National Balance Sheet: Asset: Financial Asset": true,
            "CN: National Balance Sheet: Asset: Non-financial Asset": true
        },
        "line_names": [
            "Total assets",
            "Financial assets",
            "Non-financial assets"
        ]
    },
    {
        "name": "computerIndustry",
        "title": "Computer Industry in China",
        "y-axis": "RMB (millions)",
        "dates": "month",
        "generative_func": "generateGraph('computerIndustry')",
        "selected": true,
        "filepath":"data/tech/CEIC-econ-computer-经济-电子制造-计算机.csv",
        "min_year": 2003,
        "max_year": 2018,
        "groups": {
            "All Data": true
        },
        "columns": {
            "计算机行业：总资产": true,
            "计算机行业：制成品：年初至今": true,
            "计算机行业：总负债": true,
            "计算机行业：销售收入：年初至今": true,
            // "计算机行业：雇员人数": true,
            "计算机行业：总利润：年初至今": true
        },
        "line_names": [
            "Total assets",
            "Manufactured goods: ytd",
            "Total liabilities",
            "Sales revenue: ytd",
            // "Number of employees",
            "Gross profit: ytd"
        ]
    },
    {
        "name": "stockExchangeCompositeIndex",
        "title": "China Shanghai and Shenzhen Stock Exchange Composite Index",
        "y-axis": "1990/1991 = 100",
        "dates": "day",
        "generative_func": "generateGraph('stockExchangeCompositeIndex')",
        "selected": true,
        "filepath":"data/finance/stockExchangeCompositeIndex.csv",
        "min_year": 1994,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Shanghai Stock Exchange: Index: Composite": true,
            "Shenzhen Stock Exchange: Index: Composite": true
        },
        "line_names": [
            "Shanghai Stock Exchange",
            "Shenzhen Stock Exchange"
        ]
    },
    {
        "name": "ecommerceTurnover",
        "title": "China E-commerce Business Turnover: YTD",
        "y-axis": "RMB (billions)",
        "dates": "month",
        "generative_func": "generateGraph('ecommerceTurnover')",
        "selected": true,
        "filepath":"data/tech/ecommerceTurnover.csv",
        "min_year": 2007,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: E-commerce: Business Turnover: ytd": true,
            "CN: E-commerce: Business Turnover: ytd: Business to Business": true,
            "CN: E-commerce: Business Turnover: ytd: Retail Sales": true,
            "CN: E-commerce: Business Turnover: ytd: Group Sales": true
        },
        "line_names": [
            "All",
            "Business to business",
            "Retail sales",
            "Group sales"
        ]
    },
    {
        "name": "softwareIndustry",
        "title": "China Software Industry",
        "y-axis": "RMB (millions)",
        "dates": "month",
        "generative_func": "generateGraph('softwareIndustry')",
        "selected": true,
        "filepath":"data/tech/softwareIndustry.csv",
        "min_year": 2007,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Software: Sales Revenue: ytd": true,
            "CN: Software: Total Profit: ytd": true
        },
        "line_names": [
            "Sales revenue: ytd",
            "Total profit: ytd"
        ]
    },
    {
        "name": "oilPrices",
        "title": "Oil Supply Prices in China",
        "y-axis": "RMB/ton",
        "dates": "day",
        "generative_func": "generateGraph('oilPrices')",
        "selected": true,
        "filepath":"data/economy/oilPrices.csv",
        "min_year": 2005,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Oil Price Adjustment: NDRC: Supply Price: Gasoline, Standard": true,
            "CN: Oil Price Adjustment: NDRC: Supply Price: Diesel, Standard": true,
            "CN: Oil Price after Adjustment: NDRC: Supply Price: Gasoline, Standard": true,
            "CN: Oil Price after Adjustment: NDRC: Supply Price: Diesel, Standard": true
        },
        "line_names": [
            "Oil price adjustment: gasoline",
            "Oil price adjustment: diesel",
            "Oil price after adjustment: gasoline",
            "Oil price after adjustment: diesel"
        ]
    },
    {
        "name": "fossilFuelSupply",
        "title": "Ensured Reserves of Minerals: Petroleum, Natural Cas, and Coal",
        "y-axis": "um",
        "generative_func": "generateGraph('fossilFuelSupply')",
        "selected": true,
        "filepath":"data/fossilFuelSupply.csv",
        "min_year": 2002,
        "max_year": 2017,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Ensured Reserves of Mineral: Petroleum": true,
            "CN: Ensured Reserves of Mineral: Natural Gas": true,
            "CN: Ensured Reserves of Mineral: Coal": true
        },
        "line_names": [
            "Petroleum",
            "Natural gas",
            "Coal"
        ]
    },
    {
        "name": "privEquityValue",
        "title": "China Private Equity: Value of Investment",
        "y-axis": "USD (millions)",
        "generative_func": "generateGraph('privEquityValue')",
        "dates": "month",
        "selected": true,
        "filepath":"data/finance/privEquityValue.csv",
        "min_year": 2006,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: PE: Value of Investment": true,
            "CN: VC: Value of Investment": true
        },
        "line_names": [
            "Private equity: value of investment",
            "Venture capital: value of investment"
        ]
    },
    {
        "name": "privateEquity",
        "title": "China Private Equity: Number of Investment Cases",
        "y-axis": "Number of investment cases",
        "generative_func": "generateGraph('privateEquity')",
        "dates": "month",
        "selected": true,
        "filepath":"data/finance/privateEquity.csv",
        "min_year": 2006,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Private Equity: No of Inv Case": true,
            "CN: Venture Capital: No of Inv Case": true
        },
        "line_names": [
            "Private equity",
            "Venture capital"
        ]
    },
    {
        "name": "waterResource",
        "title": "Water Resource in China",
        "y-axis": "Cubic meter (millions)",
        "generative_func": "generateGraph('waterResource')",
        "selected": true,
        "filepath":"data/waterResource.csv",
        "min_year": 1999,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Water Resource": true,
            "CN: Water Supply": true,
            "CN: Water Consumption": true
        },
        "line_names": [
            "Water resource",
            "Water supply",
            "Water consumption"
        ]
    },
    // {
    //     "name": "gdpNowcast",
    //     "title": "GDP Nowcast",
    //     "y-axis": "",
    //     "dates": "day",
    //     "generative_func": "generateGraph('gdpNowcast')",
    //     "selected": true,
    //     "filepath":"data/economy/gdpNowcast.csv",
    //     "min_year": 2023,
    //     "max_year": 2023,
    //     "groups": {
    //         "All Data": true
    //     },
    //     "columns": {
    //         "CN: GDP Nowcast: China: Current Quarter": true,
    //         "CN: GDP Nowcast: China: Next Quarter": true
    //     },
    //     "line_names": [
    //         "Current quarter",
    //         "Next Quarter"
    //     ]
    // },
    {
        "name": "insuredPeople",
        "title": "Social Security Fund: Insured People in China",
        "y-axis": "Number of people",
        "dates": "month",
        "generative_func": "generateGraph('insuredPeople')",
        "selected": true,
        "filepath":"data/governance/insuredPeople.csv",
        "min_year": 2010,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Social Security Fund: Pension: Insured Person": true,
            "CN: Social Security Fund: Medical: Insured Person": true,
            "CN: Social Security Fund: Unemployment: Insured Person": true
        },
        "line_names": [
            "Pension",
            "Medical",
            "Unemployment"
        ]
    },
    {
        "name": "studentsAbroad",
        "title": "Students Abroad and Foreign Students in China",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('studentsAbroad')",
        "selected": true,
        "filepath":"data/education/studentsAbroad.csv",
        "min_year": 1952,
        "max_year": 2020,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: No of Student Studying Abroad": true,
            "CN: No of Returned Student from Abroad": true,
            "CN: Number of Foreign Student": true
        },
        "line_names": [
            "Students studying abroad",
            "Returned students from abroad",
            "Foreign students"
        ]
    },
    {
        "name": "dependencyRatio",
        "title": "Dependency Ratios in China",
        "y-axis": "Percent",
        "generative_func": "generateGraph('dependencyRatio')",
        "selected": true,
        "filepath":"data/social/dependencyRatio.csv",
        "min_year": 1982,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Gross Dependency Ratio": true,
            "CN: Elderly Dependency Ratio": true,
            "CN: Children Dependency Ratio": true
        },
        "line_names": [
            "Gross dependency ratio",
            "Elderly dependency ratio",
            "Children dependency ratio"
        ]
    },
    {
        "name": "inflation",
        "title": "Inflation in China: Producer Price Index, Retail Price Index, Consumer Price Index",
        "y-axis": "",
        "dates": "month",
        "generative_func": "generateGraph('inflation')",
        "selected": true,
        "filepath":"data/economy/inflation.csv",
        "min_year": 1985,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Consumer Price Index": true,
            "CN: (DC)Retail Price Index": true,
            "CN: Producer Price Index(PPI)": true
        },
        "line_names": [
            "Consumer Price Index",
            "Retail Price Index",
            "Producer Price Index"
        ]
    },
    {
        "name": "govExpense",
        "title": "China Government Expenses",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('govExpense')",
        "selected": true,
        "filepath":"data/governance/CEIC-government-expense-政府-政府支出.csv",
        "min_year": 1950,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "政府支出：经济建设": true,
            "政府支出：社会、文化和教育发展": true,
            "政府支出：国防": true,
            "政府支出：行政管理": true,
            "政府支出：其他支出": true
        },
        "line_names": [
            "Economy",
            "Social, cultural, educational development",
            "Defense",
            "Administration",
            "Other"
        ]
    },
    {
        "name": "govDebt",
        "title": "China Government Debt",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('govDebt')",
        "selected": true,
        "filepath":"data/governance/CEIC-government-debt-政府-政府债务.csv",
        "min_year": 1950,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "政府财政：债务发行": true,
            "政府财政：债务支付及利息": true
        },
        "line_names": [
            "Debt issues",
            "Debt payments and interest"
        ]
    },
    {
        "name": "shanghaiStockExchange",
        "title": "Shanghai Stock Exchange Turnover Value",
        "y-axis": "RMB (millions)",
        "dates": "month",
        "generative_func": "generateGraph('shanghaiStockExchange')",
        "selected": true,
        "filepath":"data/finance/CEIC-finance-shanghai-金融-上海证券交易所.csv",
        "min_year": 1995,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "成交量：值：上海证券交易所：": true,
            "成交量：值：上海证券交易所：工业": true,
            "成交量：值：上海证券交易所：商业": true,
            "成交量：值：上海证券交易所：财产，房地产": true,
            "成交量：值：上海证券交易所：公用事业": true,
            "成交量：值：上海证券交易所：杂项": true
        },
        "line_names": [
            "Turnover value",
            "Turnover value: industrials",
            "Turnover value: commercial",
            "Turnover value: property and real estate",
            "Turnover value: utilities",
            "Turnover value: miscellaneous"
        ]
    },
    {
        "name": "educationLevel",
        "title": "Education Level of the Population in China",
        "y-axis": "Number of people (thousands)",
        "generative_func": "generateGraph('educationLevel')",
        "selected": true,
        "filepath":"data/education/educationLevel.csv",
        "min_year": 1982,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Population: Education Level: No Schooling": true,
            "CN: Population: Education  Level: Primary": true,
            "CN: Population: Education  Level: Junior Middle": true,
            "CN: Population: Education  Level: Senior Middle": true,
            "CN: Population: Education  Level: College and Higher": true
        },
        "line_names": [
            "No schooling",
            "Primary",
            "Junior middle",
            "Senior Middle",
            "College and higher"
        ]
    },
    {
        "name": "marriage",
        "title": "Marriage in China",
        "y-axis": "Number of people",
        "generative_func": "generateGraph('marriage')",
        "selected": true,
        "filepath":"data/social/CEIC-population-marriage-人口-结婚离婚.csv",
        "min_year": 1978,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "人口数:结婚": true,
            "人口数:离婚": true

        },
        "line_names": [
            "Married",
            "Divorced"
        ]
    },
    {
        "name": "birthDeathRate",
        "title": "Birth and Death Rates in China",
        "y-axis": "Unit",
        "generative_func": "generateGraph('birthDeathRate')",
        "selected": true,
        "filepath":"data/social/birthDeathRate.csv",
        "min_year": 1949,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Population: Birth Rate": true,
            "CN: Population: Death Rate": true,
            "CN: Population: Natural Growth Rate": true

        },
        "line_names": [
            "Birth rate",
            "Death rate",
            "Natural growth rate"
        ]
    },
    {
        "name": "engelsCoefficient",
        "title": "Engel's Coefficient: YTD",
        "y-axis": "Unit",
        "dates": "month",
        "generative_func": "generateGraph('engelsCoefficient')",
        "selected": true,
        "filepath":"data/economy/engelsCoefficient.csv",
        "min_year": 1978,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Engel's Coefficient: ytd": true,
            "CN: Engel's Coefficient: ytd: Urban": true,
            "CN: Engel's Coefficient: ytd: Rural": true

        },
        "line_names": [
            "Engel's coefficient",
            "Engel's coefficient: urban",
            "Engel's coefficient: rural"
        ]
    },
    {
        "name": "totalWage",
        "title": "Total Wage in China",
        "y-axis": "Unit",
        "generative_func": "generateGraph('totalWage')",
        "selected": true,
        "filepath":"data/economy/totalWage.csv",
        "min_year": 1952,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Total Wage": true,
            "Total Wage: State Owned": true,
            "Total Wage: Urban Collective Owned": true,
            "Total Wage: Other Ownership": true

        },
        "line_names": [
            "Total wage: all",
            "Total wage: state owned",
            "Total wage: urban collective owned",
            "Total wage: other ownership"
        ]
    },
    {
        "name": "stockExchangeDeals",
        "title": "Turnover: Number of Stock Exchange Deals",
        "y-axis": "Number of stock exchange deals",
        "dates": "month",
        "generative_func": "generateGraph('stockExchangeDeals')",
        "selected": true,
        "filepath":"data/finance/stockExchangeDeals.csv",
        "min_year": 1996,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Turnover: No of Deals: Shanghai Stock Exchange": true,
            "Turnover: No of Deals: Shenzhen Stock Exchange": true

        },
        "line_names": [
            "Shanghai Stock Exchange",
            "Shenzhen Stock Exchange"
        ]
    },
    {
        "name": "tradeVolume",
        "title": "International Trade Volume in China",
        "y-axis": "Millions of tons",
        "generative_func": "generateGraph('tradeVolume')",
        "selected": true,
        "dates": "month",
        "filepath":"data/economy/tradeVolume.csv",
        "min_year": 2011,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Export": true,
            "CN: Import": true

        },
        "line_names": [
            "Export",
            "Import"
        ]
    },
    {
        "name": "healthExpenditure",
        "title": "Healthcare Expenditure in China",
        "y-axis": "Percent",
        "generative_func": "generateGraph('healthExpenditure')",
        "selected": true,
        "filepath":"data/health/healthExpenditure.csv",
        "min_year": 1995,
        "max_year": 2014,
        "groups": {
            "All Data": true
        },
        "columns": {
            "(DC)Health Expenditure: Public: % of Total Health Expenditure": true,
            "(DC)Health Expenditure: Public: % of Government Expenditure": true,
            "(DC)Health Expenditure: % of GDP": true,
            "(DC)Health Expenditure: % of GDP: Private": true,
            "(DC)Health Expenditure: % of GDP: Public": true

        },
        "line_names": [
            "Public: % of total health expenditure",
            "Public: % of government expenditure",
            "Total: % of GDP",
            "Total: % of GDP: Private",
            "Total: % of GDP: Public"
        ]
    },
    {
        "name": "electricityAccess",
        "title": "Access to Electricity in China",
        "y-axis": "Percent of population",
        "generative_func": "generateGraph('electricityAccess')",
        "selected": true,
        "filepath":"data/governance/electricityAccess.csv",
        "min_year": 2000,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Access to Electricity: % of Population": true,
            "Access to Electricity: Urban: % of Urban Population": true,
            "Access to Electricity: Rural: % of Rural Population": true
        },
        "line_names": [
            "Total population",
            "Urban population",
            "Rural population"
        ]
    },
    {
        "name": "lifeExpectancy",
        "title": "Life Expectancy at Birth in China",
        "y-axis": "Years",
        "generative_func": "generateGraph('lifeExpectancy')",
        "selected": true,
        "filepath":"data/health/lifeExpectancy.csv",
        "min_year": 1960,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Life Expectancy at Birth: Total": true,
            "Life Expectancy at Birth: Male": true,
            "Life Expectancy at Birth: Female": true
        },
        "line_names": [
            "Total",
            "Male",
            "Female"
        ]
    },
    {
        "name": "techR&D",
        "title": "China Research and Development Expenditure in Technology",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('techR&D')",
        "selected": true,
        "filepath":"data/tech/techR&D.csv",
        "min_year": 1991,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Research & Development: Expenditure": true,
            "CN: R & D: Expenditure: High Technology Industry": true,
            "CN: R & D: Expenditure: HT: Electronic & Telecommunication Equip": true,
            "CN: R & D: Expenditure: HT: Medical & Pharmaceutical Product": true
        },
        "line_names": [
            "General R & D expenditure",
            "High technology industry",
            "Electronic & telecommunication equipment",
            "Medical & pharmaceautical products"
        ]
    },
    {
        "name": "balanceOfPayments",
        "title": "China Balance of Payments: Current Accounts",
        "y-axis": "USD (millions)",
        "dates": "month",
        "generative_func": "generateGraph('balanceOfPayments')",
        "selected": true,
        "filepath":"data/economy/balanceOfPayments.csv",
        "min_year": 1998,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: BoP: Current Account(CA)": true,
            "CN: BoP: CA: Credit": true,
            "CN: BoP: CA: Debit": true,
            "CN: BoP: CA: Goods": true
        },
        "line_names": [
            "Current account",
            "Current account: credit",
            "Current account: debit",
            "Current account: goods"
        ]
    },
    {
        "name": "investments",
        "title": "Investments of Listed Companies in China",
        "y-axis": "RMB (billions)",
        "generative_func": "generateGraph('investments')",
        "selected": true,
        "filepath":"data/economy/investments.csv",
        "min_year": 1992,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Listed Company: Total Revenue": true,
            "CN: Listed Company: Total Profit": true,
            "CN: Listed Company: Shareholder Equity": true
        },
        "line_names": [
            "Total revenue",
            "Total profit",
            "Shareholder equity"
        ]
    },
    {
        "name": "population",
        "title": "China Population",
        "y-axis": "Number of People (millions)",
        "generative_func": "generateGraph('population')",
        "selected": true,
        "filepath":"data/health/population.csv",
        "min_year": 1949,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Population": true,
            "CN: Population: Urban": true,
            "CN: Population: Rural": true
        },
        "line_names": [
            "Population",
            "Population: urban",
            "Population: rural"
        ]
    },
    {
        "name": "hospitals",
        "title": "Number of Hospitals and Hospital Beds in China",
        "y-axis": "Number",
        "generative_func": "generateGraph('hospitals')",
        "selected": true,
        "filepath":"data/health/hospitals.csv",
        "min_year": 1949,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: No of Bed: Hospital": true,
            "CN: No of Hospital": true
        },
        "line_names": [
            "Number of hospital beds",
            "Number of hospitals"
        ]
    },
    {
        "name": "consumerConfidence",
        "title": "Consumer Confidence in China",
        "y-axis": "Points",
        "dates": "month",
        "generative_func": "generateGraph('consumerConfidence')",
        "selected": true,
        "filepath":"data/economy/ConsumerConfidence.csv",
        "min_year": 1990,
        "max_year": 2023,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Consumer Confidence Index": true,
            "CN: Consumer Confidence Index: Satisfactory": true,
            "CN: Consumer Confidence Index: Expectation": true
        },
        "line_names": [
            "Consumer confidence index",
            "Satisfactory",
            "Expectation"
        ]
    },
    {
        "name": "militaryExpenditure",
        "title": "Military Expenditure in China",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('militaryExpenditure')",
        "selected": true,
        "filepath":"data/governance/militaryExpenditure.csv",
        "min_year": 1989,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Military Expenditure": true
        },
        "line_names": [
            "Military expenditure"
        ]
    },
    {
        "name": "inequality",
        "title": "Social Inequality in China",
        "y-axis": "Percent",
        "generative_func": "generateGraph('inequality')",
        "selected": true,
        "filepath":"data/economy/inequality.csv",
        "min_year": 1990,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Gini Coefficient (GINI Index): World Bank Estimate": true,
            "Income Share Held by Highest 10%": true,
            "Income Share Held by Highest 20%": true,
            "Income Share Held by Lowest 10%": true
        },
        "line_names": [
            "Gini Coefficient",
            "Income held by highest 10%",
            "Income held by highest 20%",
            "Income held by lowest 10%"
        ]
    },
    {
        "name": "socialSecurityFund",
        "title": "Social Security Fund in China",
        "y-axis": "RMB (millions)",
        "generative_func": "generateGraph('socialSecurityFund')",
        "selected": true,
        "filepath":"data/economy/socialSecurityFund.csv",
        "min_year": 1989,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Social Security Fund: Expense": true,
            "CN: Social Security Fund: Revenue": true,
            "CN: Social Security Fund: Accumulated Balance": true
        },
        "line_names": [
            "SSF: expense",
            "SSF: revenue",
            "SSF: accumulated balance"
        ]
    },
    {
        "name": "gdp",
        "title": "China GDP",
        "y-axis": "RMB (in billions)",
        "generative_func": "generateGraph('gdp')",
        "selected": true,
        "filepath":"data/economy/GDP.csv",
        "min_year": 1952,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Gross Domestic Product": true,
            "CN: GDP: Primary Industry": true,
            "CN: GDP: Secondary Industry(SI)": true
        },
        "line_names": [
            "GDP",
            "GDP: primary industry",
            "GDP: secondary industry"
        ]
    },
    {
        "name": "revDebt",
        "title": "National Revenue and Debt in China",
        "y-axis": "USD (ten thousands)",
        "generative_func": "generateGraph('revDebt')",
        "selected": true,
        "filepath":"data/economy/NationalRevDebt.csv",
        "min_year": 1979,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Foreign Debt: Total": true,
            "CN: Govt Revenue: Total": true,
        },
        "line_names": [
            "Total foreign debt",
            "Total government revenue",
        ]
    },
    {
        "name": "importExport",
        "title": "Imports, Exports, and Trade Balance in China",
        "y-axis": "y-axis label (10,000)",
        "generative_func": "generateGraph('importExport')",
        "selected": true,
        "filepath":"data/economy/ImportExport.csv",
        "min_year": 1992,
        "max_year": 2022,
        "dates": "month",
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Export FOB": true,
            "CN: Import CIF": true,
            "CN: Trade Balance": true,
        },
        "line_names": [
            "Export FOB",
            "Import CIF",
            "Trade balance"
        ]
    },
    {
        "name": "employment",
        "title": "Urban and Rural Employment in China",
        "y-axis": "Employment (millions)",
        "generative_func": "generateGraph('employment')",
        "selected": true,
        "filepath":"data/economy/employment.csv",
        "min_year": 1949,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Employment: Urban": true,
            "CN: Employment: Rural": true,
        },
        "line_names": [
            "Urban employment",
            "Rural Employment",
        ]
    },
    {
        "name": "students",
        "title": "Number of Graduated Students in China",
        "y-axis": "Number of students each year (thousands)",
        "generative_func": "generateGraph('students')",
        "selected": true,
        "filepath":"data/education/number_of_students.csv",
        "min_year": 1952,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "毕业生数量：研究生": true,
            "毕业生数量：高等学校": true,
            "毕业生数量：中学": true,
            "毕业生数量：中等专业学校": true,
            "毕业生数量：小学": true
        },
        "line_names": [
            "Doctorate",
            "High school",
            "Middle school",
            "Secondary specialized school",
            "Elementary school"
        ]
    },
    {
        "name": "schools",
        "title": "Number of Schools in China",
        "y-axis": "Number of schools each year",
        "generative_func": "schoolsGraph",
        "selected": true,
        "filepath":"data/education/number_of_schools.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "学校数量：高等学校": true,
            "学校数量：中学": true,
            "学校数量：小学": true
        },
        "line_names": [
            "High schools",
            "Middle schools",
            "Elementary schools"
        ]
    },
    {
        "name": "automobile",
        "title": "Automobiles in China",
        "y-axis": "Number of automobiles",
        "generative_func": "automobileGraph",
        "selected": true,
        "category": "transportation",
        "filepath":"data/transportation/automobile.csv",
        "min_year": 1949,
        "max_year": 2021,
        "groups": {
            "All Data": true,
            "United States": false,
            "China": false,
            "Buses and Cars": false,
            "Trucks": false,
            "Other": false,
        },
        "columns": {
            "已拥有机动车：民用：共计": true,
            "已拥有机动车：民用：巴士和汽车": true,
            "已拥有机动车：民用：卡车": true,
            "已拥有机动车：民用：其他专用车辆": true,
        },
        "line_names": [
            "Total",
            "Buses and cars",
            "Trucks",
            "Other",
        ]
    },
    {
        "name": "crime",
        "title": "Crimes",
        "y-axis": "Number of Crimes (units)",
        "generative_func": "crimeGraph",
        "selected": true,
        "filepath":"data/governance/crime.csv",
        "min_year": 1985,
        "max_year": 2020,
        "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
            "Homicide": false,
            "Violent": false,
            "Property": false
        },
        "columns": {
            "CN_homicide": true,
            "US_homicide": true,
            "CN_violent": true,
            "US_violent": true,
            "CN_property": true,
            "US_property": true
        },
        "line_names": [
            "China homicides",
            "US homicides",
            "China violent crimes",
            "US violent crimes",
            "China property crimes",
            "US property crimes"
        ]
    },
    {
        "name": "degree",
        "title": "Degrees Earned",
        "y-axis": "Degrees earned (units)",
        "generative_func": "degreeGraph",
        "selected": true,
        "filepath":"data/education/degree.csv",
        "min_year": 1969,
        "max_year": 2019,
        "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
            "Doctor": false,
            "Bachelor": false,
        },
        "columns": {
            "CN_Bachelor": true,
            "CN_Doctor": true,
            "US_Bachelor": true,
            "US_Doctor": true
        },
        "line_names": [
            "China Bachelors",
            "China Doctors",
            "USA Bachelors",
            "USA Doctors"
        ]
    },
    {
        "name": "railway",
        "title": "Railways",
        "y-axis": "Number of highspeed rails (units)",
        "selected": true,
        "filepath":"data/transportation/railway.csv",
        "category": "transportation",
        "min_year": 2000,
        "max_year": 2021,
        "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
        },
        "columns": {
            "US_highspeed_rail": true,
            "CN_highspeed_rail": true
        },
        "line_names": [
            "USA railways",
            "China railways"
        ]
    },
    {
       "name": "citations",
       "title": "Paper Citations",
       "y-axis": "Number of citations (units)",
       "generative_func": "citationsGraph",
       "selected": true,
       "filepath":"data/education/science.csv",
       "min_year": 1800,
       "max_year": 2020,
       "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
        },
        "columns": {
            "cn_paper_citation": true,
            "us_paper_citation": true
        },
        "line_names": [
            "China citations",
            "USA citations"
        ]
    },
    {
       "name": "papers",
       "title": "Papers",
       "y-axis": "Number of papers (units)",
       "generative_func": "generateGraph('papers')",
       "selected":false,
       "filepath":"data/education/science.csv",
       "min_year": 1800,
       "max_year": 2020,
       "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
        },
        "columns": {
            "us_paper_count": true, 
            "cn_paper_count": true
        },
        "line_names": [
            "USA papers",
            "China papers"
        ]
    },
    {
       "name": "roads",
       "title": "Length of Roads and Expressways",
       "y-axis": "Length (units)",
       "generative_func": "roadGraph",
       "category": "transportation",
       "selected":false,
       "filepath":"data/transportation/roads.csv",
       "min_year": 1980,
       "max_year": 2020,
       "groups": {
          "All Data": true,
          "China (domestic)": false,
          "United States (domestic)": false,
          "Highways": false,
          "Expressways": false,
       },
       "columns": {
           "US: Public  Road  and  Street  Length in US (by 10,000 kilometers)": true,
           "China: Highway Length (by 10,000 kilometers)": true,
           "China: Length of Expressways (by 10,000 kilometers)": true,
           "US: Length of Interstate and Other Freeways and Expressways (by 10,000 kilometers)": true
       },
       "line_names": [
           "US road length",
           "China highway length",
           "China expressways length",
           "US expressways length"
       ]
    },
    {
        "name": "internet",
        "title": "Internet Usage",
        "y-axis": "Internet usage (units)",
        "generative_func": "internetUseGraph",
        "selected":false,
        "filepath":"data/tech/internet.csv",
        "min_year": 1997,
        "max_year": 2020,
        "groups": {
          "All Data": true,
          "China (domestic)": false,
          "United States (domestic)": false,
          "Broadband": false,
          "Access": false,
          "Mobile": false,
       },
       "columns": {
            "us_internet_access": true,
            "us_broadband_subscriptions": true,
            "us_mobile_internet_users": true,
            "cn_internet_access": true,
            "cn_broadband_subscriptions": true,
            "cn_mobile_internet_users": true
       },
        "line_names": [
            "US internet access",
            "US broadband",
            "US mobile internet users",
            "China internet access",
            "China broadband",
            "China mobile internet users"
    ]
    },
    {
        "name": "patent",
        "title": "Number of Patents",
        "y-axis": "Number of patents (units)",
        "generative_func": "patentGraph",
        "selected": false,
        "filepath":"data/tech/patent.csv",
        "min_year": 1970,
        "max_year": 2020,
        "groups": {
            "All Data": true,
            "China (domestic)": false,
            "United States (domestic)": false,
        },
        "columns": {
            "US_patents": true,
            "CN_patents": true
        },
        "line_names": [
            "USA patents",
            "China patents"
        ]
    }
];
