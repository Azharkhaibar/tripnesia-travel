<Image
                      src={guiderPerson.pictPerson}
                      w="150px"
                      h="150px"
                      borderRadius="50%"
                      objectFit="cover"
                      position="absolute"
                      top="0"
                      left="50%"
                      transform="translate(-50%, -30%)"
                      border="3px solid grey"
                      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                      zIndex="100"
                      alt="gambar-dummy"
                    />

<!-- REST API CONTACT FORM -->
const [firstnameClient, setFirstNameClient] = useState('');
  const [email, setEmail] = useState('');
  const [typedestination, setTypeDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Sending data:', {
        firstnameClient,
        email,
        typedestination,
        message
      });

      const postResponse = await axios.post('http://localhost:4001/api/contact', {
        firstname: firstnameClient,  // Ensure this matches the model field name
        email,
        typedestination,
        message
      });

      console.log('Data successfully sent:', postResponse.data);
      alert('Message sent successfully!');
      setFirstNameClient('');
      setEmail('');
      setTypeDestination('');
      setMessage('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        console.error('Axios error occurred:', {
          status,
          data,
          message: error.message
        });
        alert(`Failed to send message. Status: ${status}. Please try again.`);
      } else {
        console.error('Unexpected error occurred:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };