import pandas as pd
import numpy as np

def processData(data):
    df = pd.read_csv(data, skiprows=[i for i in range(1, 27) ])

    # df = df.dropna()

    df['year'] = pd.to_datetime(df['year'], format='%m-%Y')

    df['year'] = df['year'].dt.year
    # print(df)
    grouped_df = df.groupby('year')[['CN: Export', 'CN: Import']].sum()

    return grouped_df

# print(processData('data/economy/CEIC-government-tax-政府-政府收入税收.csv', 'mean'))

input_csv = 'data/economy/tradeVolume.csv'

result = processData(input_csv)

# Save the result to a CSV file
result.to_csv('data/economy/tradeVolumeAnnual.csv', header=['CN: Export', 'CN: Import'])

print(result)
# print(original_data.shape[1])
