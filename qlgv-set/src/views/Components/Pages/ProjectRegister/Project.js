import React from 'react';
import ProjectTable from '../../elements/Input/ProjectTable'

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {     
      
    };  
  }

  render() {
    const { dispatch } = this.props;
    const Table1 = {
      colNames: ["Giảng viên", "Số lượng ĐK", "Email", "SĐT", "Lựa chọn"],
      buttonName: "Gửi đăng ký"
    }

    const Table2 = {
      tableName : "Lớp đã chọn",
      colNames : ["Giảng viên", "Số lượng ĐK", "Email", "SĐT"],
      buttonName: "Xóa lớp đã chọn"
    }

    return (                    
      <row>
        <ProjectTable tableName="" buttonName={Table1.buttonName} colNames={Table1.colNames}/>                         
        <ProjectTable tableName={Table2.tableName} buttonName={Table2.buttonName} colNames={Table2.colNames}/>    
        
      </row>                   
                                       
    );
  }
}

export default Project;