import React from "react" 
import {Form,Button,FormControl} from "react-bootstrap"
const yyt=()=>{
    return(


      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
 
    )
}
export default yyt;
