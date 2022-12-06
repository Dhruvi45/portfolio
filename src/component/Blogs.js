import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import BlogList from './BlogList.json'
export default function Blogs() {
    return (
        <>
            <div className='projects'>
                {
                    BlogList.map((value) => {
                        return (
                            <Card className='projectCard bg-dark text-white'>
                                <Card.Title className='text-center pt-4'>
                                    {value.Blog}
                                </Card.Title>
                                <Card.Body className='ps-4 pe-4'>
                                    {value.description}
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </>
    )
}
