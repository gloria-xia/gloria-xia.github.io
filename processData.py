import pandas as pd
import numpy as np

#convert monthly or daily data to annual
def processData(data):
    df = pd.read_csv(data, skiprows=[i for i in range(1, 27)])
    # skiprows=[i for i in range(1, 27)]

    df['year'] = pd.to_datetime(df['year'])

    df['year'] = df['year'].dt.year

    grouped_df = df.groupby('year')["CN: PE: Value of Investment", 'CN: VC: Value of Investment'].sum()
    # grouped_df = df.groupby('year')['Shanghai Stock Exchange: Index: Composite', 'Shenzhen Stock Exchange: Index: Composite'].mean()
    # grouped_df = df.groupby('year')[['通信设备制造：总资产', '通信设备制造：制成品：年初至今', '通信设备制造：总负债', '通信设备制造：销售收入：年初至今', '通信设备制造：总利润：年初至今']].last()

    grouped_df = grouped_df.replace(0, np.nan)

    return grouped_df


input_csv = 'data/finance/privEquityValue.csv'

result = processData(input_csv)

# Save the result to a new CSV file
result.to_csv('data/finance/privEquityValue-annual.csv', header=["CN: PE: Value of Investment", 'CN: VC: Value of Investment'])

print(result)