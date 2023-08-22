full_data_string = "All Data"
animateGraph = false; // determines whether lines will animate

// Client for new data source setup (CMD program)
// name, filepath, min/max year, csv header/column names (groups) with colors

ccc_dataSources = [
    {
        "name": "infantMortality",
        "title": "Infant Mortality Rate",
        "y-axis": "Mortality per 1000 live births",
        "containsUSData": true,
        "generative_func": "generateGraph('infantMortality')",
        "selected": true,
        "filepath":"data/health/infantMortality.csv",
        "min_year": 1960,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Mortality Rate: Infant: per 1000 Live Births (China)": true,
            "Mortality Rate: Infant: per 1000 Live Births (US)": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "China",
            "United States"
        ],
        "notes": ["Infant mortality rate is the number of infants dying before reaching one year of age, per 1,000 live births in a given year. Estimates developed by the UN Inter-agency Group for Child Mortality Estimation (UNICEF, WHO, World Bank, UN DESA Population Division) at www.childmortality.org; Weighted average; Given that data on the incidence and prevalence of diseases are frequently unavailable, mortality rates are often used to identify vulnerable populations. Moreover, they are among the indicators most frequently used to compare socioeconomic development across countries. Under-five mortality rates are higher for boys than for girls in countries in which parental gender preferences are insignificant. Under-five mortality captures the effect of gender discrimination better than infant mortality does, as malnutrition and medical interventions have more significant impacts to this age group. Where female under-five mortality is higher, girls are likely to have less access to resources than boys. Aggregate data for LIC, UMC, LMC, HIC are computed based on the groupings for the World Bank fiscal year in which the data was released by the UN Inter-agency Group for Child Mortality Estimation."]
    },
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
            // "人均收入：年初至今：城镇居民：36座城市平均": true,
            // "人均可支配收入：年初至今：城镇居民：36座城市平均": true,
            // "人均支出：年初至今：城镇居民：36座城市平均": true,
            // "人均生活开支：年初至今：城镇居民：36座城市平均": true,
            "人均现金收入：年初至今：农村居民家庭（RH）": true,
            "人均现金支出：年初至今：农村居民家庭（RH）": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            // "Income per capita: urban resident: 36 cities average",
            // "Disposable income per capita: urban, 36 cities average",
            // "Expenditure per capita: urban: 36 cities average",
            // "Living expenditure per capita: Urban: 36 cities average",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Arable land area"
        ]
    },
    {
        "name": "energyConsumption",
        "title": "Energy Consumption",
        "y-axis1": "Percent",
        "y-axis2": "Tons (millions)",
        "generative_func": "generateGraph('energyConsumption')",
        "selected": true,
        "doubleYAxis": true,
        "filepath":"data/CEIC-envorinment-consumption-环境-能源消费.csv",
        "min_year": 1990,
        "max_year": 2019,
        "groups": {
            "All Data": true
        },
        // "leftAxisColumns": {
        //     "CN：能源消耗：占能源总消费百分比：农业": true,
        //     "CN：能源消耗：占能源总消费百分比：工业": true,
        //     "CN：能源消耗：占能源总消费百分比：服务业": true,
        //     "CN：能源消耗：占能源总消费百分比：交通运输": true,
        //     "CN：能源消耗：占能源总消费百分比：其他行业": true
        // },
        // "rightAxisColumns": {
        //     "CN：Total Primary Energy Supply": true
        // },
        // "leftLineNames": [
        //     "% of total energy consumption: agriculture",
        //     "% of total energy consumption: industry",
        //     "% of total energy consumption: services",
        //     "% of total energy consumption: transportation",
        //     "% of total energy consumption: other"
        // ],
        // "rightLineNames": [
        //     "Total primary energy supply"
        // ],
        "columns": {
            "right": {
                "CN：Total Primary Energy Supply": true
            },
            "left": {
                "CN：能源消耗：占能源总消费百分比：农业": true,
                "CN：能源消耗：占能源总消费百分比：工业": true,
                "CN：能源消耗：占能源总消费百分比：服务业": true,
                "CN：能源消耗：占能源总消费百分比：交通运输": true,
                "CN：能源消耗：占能源总消费百分比：其他行业": true
            }
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": {
            "right": [
                "Total primary energy supply"
            ],
            "left": [
                "% of total energy consumption: agriculture",
                "% of total energy consumption: manufacturing",
                "% of total energy consumption: services",
                "% of total energy consumption: transportation",
                "% of total energy consumption: other"
            ]
        }
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Number of international entries",
            "Number of international departures"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Cargo throughput"
        ]
    },
    {
        "name": "unemployment",
        "title": "Employment and Unemployment",
        "y-axis2": "Percent",
        "y-axis1": "Number of people (millions)",
        "doubleYAxis": true,
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
            "right": {
                "已登记失业率：城镇: annual": true,
                "已登记失业率：城镇": true
            },
            "left": {
                "就业": true
            }
            
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": {
            "right": [
                "Annual registered unemployment rate: urban",
                "Quarterly registered unemployment rate: urban"
            ],
            "left": [
                "Number of employed people"
            ]
            
        }
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "displayAnnualData": true,
        "dates": "month",
        "selected": true,
        "filepath":"data/economy/CEIC-government-tax-政府-政府收入税收.csv",
        "annualFilepath": "data/economy/CEIC-government-tax-政府-政府收入税收-annual.csv",
        "min_year": 1995,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "政府收入：税收": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Gross national income"
        ]
    },
    {
        "name": "householdFlowOfFunds",
        "title": "Flow of Funds: Household",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Market Capitalization: Domestic Listed Companies",
            "Shares Traded: Total Value"
        ]
    },
    {
        "name": "humanDevelopmentIndex",
        "title": "United Nations Human Development Index: China and the United States",
        "y-axis": "N/A",
        "generative_func": "generateGraph('humanDevelopmentIndex')",
        "containsUSData": true,
        "selected": true,
        "filepath":"data/humanDevelopmentIndex.csv",
        "min_year": 1990,
        "max_year": 2021,
        "groups": {
            "All Data": true
        },
        "columns": {
            "Human Development Index: China": true,
            "Human Development Index: United States": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "China",
            "United States"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "All",
            "Business to business",
            "Retail sales",
            "Group sales"
        ]
        // "notes": []
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "title": "Ensured Reserves of Minerals: Petroleum, Natural Gas, and Coal",
        "y-axis1": "Tons (millions)",
        "y-axis2": "Cubic meters (billions)",
        "doubleYAxis": true,
        "generative_func": "generateGraph('fossilFuelSupply')",
        "selected": true,
        "filepath":"data/fossilFuelSupply.csv",
        "min_year": 2002,
        "max_year": 2017,
        "groups": {
            "All Data": true
        },
        "columns": {
            "right": {
                "CN: Ensured Reserves of Mineral: Petroleum": true,
                "CN: Ensured Reserves of Mineral: Coal": true},
            "left": {
                "CN: Ensured Reserves of Mineral: Natural Gas": true
            }

        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": {
            "right": [
                "Petroleum",
                "Coal"
            ],
            "left": [
                "Natural gas"
            ]
        }
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
            // "CN: Water Supply": true,
            "CN: Water Consumption": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Water resource",
            // "Water supply",
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
        "y-axis": "Number of insured people",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Married",
            "Divorced"
        ]
    },
    {
        "name": "birthDeathRate",
        "title": "Birth and Death Rates in China",
        "y-axis": "Percent",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "y-axis": "RMB (billions)",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "displayAnnualData": true,
        "dates": "month",
        "filepath": "data/economy/tradeVolume.csv",
        "annualFilepath": "data/economy/tradeVolumeAnnual.csv",
        "min_year": 2011,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "CN: Export": true,
            "CN: Import": true

        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        // "displayAnnualData": true,
        // "dates": "month",
        "generative_func": "generateGraph('balanceOfPayments')",
        "selected": true,
        "filepath":"data/economy/balanceOfPaymentsAnnual.csv",
        "min_year": 1982,
        "max_year": 2022,
        "groups": {
            "All Data": true
        },
        "columns": {
            "BoP: Current Account (CA)": true,
            "BoP: CA: Credit": true,
            "BoP: CA: Debit": true,
            "BoP: CA: Goods": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "filepath":"data/economy/Investments.csv",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Total foreign debt",
            "Total government revenue",
        ]
    },
    {
        "name": "importExport",
        "title": "Imports, Exports, and Trade Balance in China",
        "y-axis": "USD (millions)",
        "generative_func": "generateGraph('importExport')",
        "selected": true,
        "filepath":"data/economy/trade.csv",
        "min_year": 1950,
        "max_year": 2022,
        // "dates": "month",
        "groups": {
            "All Data": true
        },
        "columns": {
            "Exports: Annual": true,
            "Imports: Annual": true,
            "Trade Balance: Annual": true
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Exports: Annual",
            "Imports: Annual",
            "Trade Balance: Annual"
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "min_year": 1975,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Doctorate",
            "Colleges and universities",
            "Secondary (middle and high) school",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "Colleges and Universities",
            "Secondary (middle and high) schools",
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
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
        "y-axis": "Number of crimes per 100,000 people",
        "generative_func": "crimeGraph",
        "containsUSData": true,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "China homicides",
            "United States homicides",
            "China violent crimes",
            "United States violent crimes",
            "China property crimes",
            "United States property crimes"
        ]
    },
    {
        "name": "degree",
        "title": "Degrees Earned",
        "y-axis": "Degrees earned (units)",
        "generative_func": "degreeGraph",
        "containsUSData": true,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "China bachelors",
            "United States bachelors",
            "China doctors",
            "United States doctors"
        ]
    },
    {
        "name": "railway",
        "title": "Railways",
        "y-axis": "Kilometers (thousands)",
        "selected": true,
        "containsUSData": true,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "United States railways",
            "China railways"
        ]
    },
    {
       "name": "citations",
       "title": "Paper Citations",
       "y-axis": "Number of citations (units)",
       "generative_func": "citationsGraph",
       "containsUSData": true,
       "selected": true,
       "filepath":"data/education/science.csv",
       "min_year": 1949,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "China citations",
            "United States citations"
        ],
        "notes": ["Data before 1949 is not shown."]
    },
    {
       "name": "papers",
       "title": "Academic Papers",
       "y-axis": "Number of papers (units)",
       "generative_func": "generateGraph('papers')",
       "selected": false,
       "containsUSData": true,
       "filepath":"data/education/science.csv",
       "min_year": 1949,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "United States papers",
            "China papers"
        ],
        "notes": ["Data before 1949 is not shown."]
    },
    {
        "name": "bridges",
        "title": "Highway Bridges",
        "doubleYAxis": true,
        "y-axis1": "Length of bridges (by 10,000 kilometers)",
        "y-axis2": "Number of highway bridges (by 10,000 counts)",
        "containsUSData": true,
        "generative_func": "generateGraph('bridges')",
        "selected": true,
        "filepath":"data/transportation/roads.csv",
        "min_year": 1990,
        "max_year": 2018,
        "groups": {
            "All Data": true
        },
        "columns": {
            "right": {
                "China: Number of Highway Bridges (by 10,000 counts)": true,
           "US: Number of Highway Bridges (by 10,000 counts)": true
            },
            "left": {
                "China: Length of Highway Bridges (by 10,000 kilometers)": true,
            "US: Length of Bridges (by 10,000 kilometers)": true
            }
        }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": {
            "right": [
                "China: number of highway bridges",
                "United States: number of highway bridges"
            ],
            "left": [
                "China: length of highway bridges",
                "United States: length of bridges"
            ]
        }
    },
    {
       "name": "roads",
       "title": "Length of Roads and Expressways",
       "y-axis": "Kilometers (ten thousands)",
       "generative_func": "roadGraph",
       "containsUSData": true,
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
           "US: Length of Interstate and Other Freeways and Expressways (by 10,000 kilometers)": true,
           "China: Length of Expressways (by 10,000 kilometers)": true
       },
       "source": {
        "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
    },
       "line_names": [
           "United States public road and streed length",
           "China highway length",
           "United States interstate, other freeways, and expressways length",
           "China expressways length"
       ]
    },
    {
        "name": "internet",
        "title": "Internet Usage",
        "y-axis": "Units",
        "generative_func": "internetUseGraph",
        "containsUSData": true,
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
            "cn_internet_access": true,
            "us_broadband_subscriptions": true,
            "cn_broadband_subscriptions": true,
            "us_mobile_internet_users": true,
            "cn_mobile_internet_users": true
       }, 
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "United States internet access",
            "China internet access",
            "United States broadband subscriptions",
            "China broadband subscriptions",
            "United States mobile internet users",
            "China mobile internet users"
    ]
    },
    {
        "name": "patent",
        "title": "Number of Patents",
        "y-axis": "Number of patents (units)",
        "generative_func": "patentGraph",
        "containsUSData": true,
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
        "source": {
            "CEIC Data": "https://insights-ceicdata-com.ezproxy.princeton.edu/Name-your-insight/myseries"
        }, 
        "line_names": [
            "United States patents",
            "China patents"
        ]
    }
];
