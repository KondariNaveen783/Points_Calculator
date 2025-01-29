# My React App

This project is a React application designed to calculate and display customer transaction points based on their spending. It includes components for fetching and displaying transaction data, as well as utility functions for calculating points.

## Project Structure

```
my-react-app
├── public
│   ├── index.html          # Main HTML file for the application
│   ├── manifest.json       # Metadata about the application
│   └── data                # Folder for JSON mock data with customer details
├── src
│   ├── components
│   │   └── PointsCalculator.js  # Component for displaying transaction data and calculating points
│   ├── services
│   │   └── api.js          # API calls to fetch transaction data
│   ├── utils               # Folder for utility functions
│   │   └── pointsCalculator.js  # Utility functions for points calculation
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json            # Configuration file for npm
├── .gitignore              # Files and directories to be ignored by Git
└── README.md               # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage Guidelines

- The application fetches transaction data and calculates points based on the spending amount.
- The PointsCalculator component displays a table view of customers and their transactions.
- Ensure to handle cases where customer data may not exist by implementing null checks.

## Testing

- A negative unit test case has been implemented to ensure robustness against invalid data inputs.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
