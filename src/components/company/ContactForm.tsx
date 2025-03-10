import {FC, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Company, Contact} from "../../utils/types";
import axios from "../../utils/axios";

const ContactForm: FC<{contact?: Contact, company: Company, onAction: (c: Contact) => void, updateMode?: boolean}> = ({contact, company, onAction, updateMode}) => {

    const [lastname, setLastname] = useState<string>(contact ? contact.lastname : "");
    const [firstname, setFirstname] = useState<string>(contact ? contact.firstname : "");
    const [mail, setMail] = useState<string>(contact ? contact.mail : "");
    const [isImportant, setIsImportant] = useState<boolean>(contact ? contact.isImportant : false);
    const [job, setJob] = useState<string>(contact ? contact.job : "");
    const [mobilePhoneNumber, setMobilePhoneNumber] = useState<string>(contact ? contact.mobilePhoneNumber : "");
    const [fixPhoneNumber, setFixPhoneNumber] = useState<string>(contact ? contact.fixPhoneNumber : "");

    const handleChange = set => event => {
        set(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const contactDto: Contact = {
            id: contact ? contact.id : undefined,
            lastname,
            firstname,
            mail,
            isImportant,
            job,
            mobilePhoneNumber,
            fixPhoneNumber,
            company
        }

        const action = updateMode ? axios.put : axios.post;

        action("contacts", {
            contact: contactDto
        })
            .then(({data}) => {
                onAction(updateMode ? contactDto : data);
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Nom
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={lastname} onChange={handleChange(setLastname)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Prénom
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={firstname} onChange={handleChange(setFirstname)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Mail
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={mail} onChange={handleChange(setMail)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Job
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={job} onChange={handleChange(setJob)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Téléphone (mobile)
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={mobilePhoneNumber} onChange={handleChange(setMobilePhoneNumber)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Téléphone (fixe)
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={fixPhoneNumber} onChange={handleChange(setFixPhoneNumber)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="3">
                    Important
                </Form.Label>
                <Col sm="9">
                    <Button type="button" variant={isImportant ? "success" : "danger"} onClick={() => setIsImportant(!isImportant)}>{isImportant ? "Oui" : "Non"}</Button>
                </Col>
            </Form.Group>

            <div className="text-center">
                <button type="submit" className="mon-button">Valider</button>
            </div>

        </Form>
    )
}

export default ContactForm;
