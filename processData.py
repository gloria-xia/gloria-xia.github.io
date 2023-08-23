import pandas as pd
import numpy as np

#convert monthly or daily data to annual
def processData(data):
    df = pd.read_csv(data, skiprows=[i for i in range(1, 27) ])

    # df = df.dropna()

    df['year'] = pd.to_datetime(df['year'])

    df['year'] = df['year'].dt.year

    # grouped_df = df.groupby('year')['货运吞吐量：主要海港和河港'].sum()
    # grouped_df = df.groupby('year')['Shanghai Stock Exchange: Index: Composite', 'Shenzhen Stock Exchange: Index: Composite'].mean()
    grouped_df = df.groupby('year')[['CN: E-commerce: Business Turnover: ytd', 'CN: E-commerce: Business Turnover: ytd: Business to Business', 'CN: E-commerce: Business Turnover: ytd: Retail Sales', 'CN: E-commerce: Business Turnover: ytd: Group Sales']].last()

    return grouped_df


input_csv = 'data/tech/ecommerceTurnover.csv'

result = processData(input_csv)

# Save the result to a CSV file
result.to_csv('data/tech/ecommerceTurnoverAnnual.csv', header=['CN: E-commerce: Business Turnover: ytd', 'CN: E-commerce: Business Turnover: ytd: Business to Business', 'CN: E-commerce: Business Turnover: ytd: Retail Sales', 'CN: E-commerce: Business Turnover: ytd: Group Sales'])

print(result)
# print(original_data.shape[1])
