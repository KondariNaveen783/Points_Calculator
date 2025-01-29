const fetchTransactionData = async () => {
    try {
        const response = await fetch('/data/transactions.json'); 
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch transaction data:', error);
        return [];
    }
};

export { fetchTransactionData };
