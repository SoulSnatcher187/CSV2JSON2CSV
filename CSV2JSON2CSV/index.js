function convertToJSON() {
    const csvInput = document.getElementById('csvInput').value;

    if (!csvInput) {
        displayWarning('CSV input is empty.');
        return;
    }

    Papa.parse(csvInput, {
        header: true,
        complete: function (results) {
            const jsonData = JSON.stringify(results.data, null, 2);
            document.getElementById('jsonOutput').value = jsonData;
            clearWarning();
        },
        error: function (error) {
            displayWarning('Invalid CSV format.');
        }
    });
}

function convertToCSV() {
    const jsonInput = document.getElementById('jsonOutput').value;

    if (!jsonInput) {
        displayWarning('JSON input is empty.');
        return;
    }

    try {
        const jsonData = JSON.parse(jsonInput);
        const csvData = Papa.unparse(jsonData);
        document.getElementById('csvOutput').value = csvData;
        clearWarning();
    } catch (error) {
        displayWarning('Invalid JSON format.');
    }
}

function displayWarning(message) {
    document.getElementById('warning').textContent = message;
}

function clearWarning() {
    document.getElementById('warning').textContent = '';
}

function clearFields() {
    document.getElementById('csvInput').value = '';
    document.getElementById('jsonOutput').value = '';
    document.getElementById('csvOutput').value = '';
    document.getElementById('csvPath').value = '';
    document.getElementById('jsonPath').value = '';
    clearWarning();
}