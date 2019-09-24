import React from 'react';
import { Table, Button, Card } from 'reactstrap';

class ProjectTable extends React.Component{
    render(){
        const colNames = [];
        const checker = [];
        for(let colName of this.props.colNames){    
            if(colName == "Lựa chọn") {
                checker.push(<input type="checkbox"/>) ;
            }       
            colNames.push(<th>{colName}</th>);
        }
        
        return(            
            <row>   
                <h2>{this.props.tableName}</h2>                 
                <Card>                            
                    <Table responsive>
                        <thead>
                            <tr>                                
                                {colNames}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Samppa Nori</td>
                                <td>5/10</td>
                                <td>Member</td>   
                                <td>0123456789</td>
                                <td>
                                    {checker}
                                </td>          
                            </tr>                                         
                        </tbody>
                    </Table>                    
                </Card>      
                <Button >{this.props.buttonName}</Button>          
            </row>          
            
        );
    }
}

export default ProjectTable;