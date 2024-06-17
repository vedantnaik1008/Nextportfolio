import { useState } from "react";
import emailjs from 'emailjs-com';

const useForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill in name, email and message fields');
            return;
        }

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        const emailParams = {
            to_email: 'vedunaik777@gmail.com',
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs
            .send(
                'service_jdbf2fs',
                'template_ohphv2f',
                emailParams,
                'eakx2TGqrzbgSyllM'
            )
            .then(() => {
                alert('Email sent successfully!');
                setIsSubmitting(false);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Error sending email. Please try again later.');
                setIsSubmitting(false);
            });
    };
  return { name, email, message, setName, setEmail, setMessage, handleSubmit, isSubmitting }
}

export default useForm