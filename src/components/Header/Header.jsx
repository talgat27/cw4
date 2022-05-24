import React from "react"
import { Link } from 'react-router-dom'
import { Button } from "antd";
import './Header.scss'

export default function Header() {
    return (
        <div className="header">
            <div>
                <Link to="/TestList/TestList">
                    <Button className="btn" type="primary">Test List</Button>
                </Link>
                <Link to="/AddTest/AddTest">
                    <Button className="btn" type="primary">Add Test</Button>
                </Link>
            </div>
        </div>
    )
}