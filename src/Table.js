import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nama</th>
                <th>Pekerjaan</th>
            </tr>
        </thead>
    )
}


class Table extends Component {
    render() {
        const {characterData} = this.props
        console.log(this.props)

        const TableBody = props => {
            console.log(this.props)
            const rows = this.props.characterData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.job}</td>
                    </tr>
                )
            })
            return (
                <tbody>{rows}</tbody>
            )
        }

        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table