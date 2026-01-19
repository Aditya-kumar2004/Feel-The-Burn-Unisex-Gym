

const verifyContactApi = async () => {
    try {
        console.log('Testing Contact API...');

        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Test Verify',
                email: 'test@example.com',
                phone: '1234567890',
                message: 'This is a verification message to check API status.'
            })
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', data);

        if (response.status === 200) {
            console.log('✅ Contact API is working correctly!');
        } else {
            console.log('❌ Contact API failed.');
        }

    } catch (error) {
        console.error('❌ Error testing API:', error.message);
    }
};

verifyContactApi();
