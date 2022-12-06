import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import Projectlist from './ProjectList.json'
import { useNavigate, Link } from "react-router-dom";


export default function Project() {
    const nevigate = useNavigate();
    useEffect(() => {

    }, [])

    return (
        <>
            <div className='projects'>
                {
                    Projectlist.map((value) => {
                        return (
                            <Card className='projectCard bg-dark text-white'>
                                <Card.Title className='text-center pt-4'>
                                    {value.projectName}
                                </Card.Title>
                                <Card.Body className='ps-4 pe-4'>
                                    {value.description}
                                </Card.Body>
                                <Card.Footer className='text-center'>
                                    <a href={value.source} target='_blank' rel="noreferrer" className="btn btn-light me-3" >Source</a>
                                    {value.live && 
                                    <a href={value.live} target='_blank' rel="noreferrer" className="btn btn-light" >Live demo</a>
                                    }
                                </Card.Footer>
                            </Card>
                        );
                    })
                }
            </div>
        </>
    );
}
