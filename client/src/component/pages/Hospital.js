import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


function Hospital() {
    return (
        <div>
          <Container>
          <div class="row_hospital">
            
              <div class="column_hospital">
                <h2>Hospital Details Management</h2>
                  Features,Benefits and Working Process
                </div>
                <div class="column_hospital">
                  <img src="images/Hospital.jpeg" width="400px"></img>
                </div>
          </div>
          <center>
            <Form.Control type="text" placeholder="Search Here..." />
          </center>
          <Card>
  <div class="row_hospital">
              <div class="column_hospital">
                  <img src="images/Hemas-hospital 1.png" width="200px"></img>
                </div>
              <div class="column_hospital">
                Contact Number:- 01167390473<br/>
                Location- 18,mainroad colombo 4<br/>
                Ward Available -<br/>
                Staff Count-145<br />
                
              </div>
              
              
                
          </div>
          </Card>
                 <Card>
  <div class="row_hospital">
              <div class="column_hospital">
                  <img src="images/pic2.png" width="200px"></img>
                </div>
              <div class="column_hospital">
                Contact Number:- 01196726309<br/>
                Location- 18,mainroad colombo 4<br/>
                Ward Available -<br/>
                Staff Count-130<br/>
              </div>
              
              
              
                
          </div>
          </Card>
                         <Card>
  <div class="row_hospital">
              <div class="column_hospital">
                  <img src="/images/pic3.png" width="200px"></img>
                </div>
              <div class="column_hospital">
                Contact Number:- 01110152981<br/>
                Location- 18,mainroad colombo 4<br/>
                Ward Available -<br/>
                Staff Count-155<br/>
              </div>
              
              
              
                
          </div>
          </Card>
                                 <Card>
  <div class="row_hospital">
              <div class="column_hospital">
                  <img src="images/pic4.png" width="200px"></img>
                </div>
              <div class="column_hospital">
                Contact Number:- 01110152981<br/>
                Location- 18,mainroad colombo 4<br/>
                Ward Available -<br/>
                Staff Count-165<br/>
              </div>
              
              
              
                
          </div>
</Card>
        </Container>
      </div>
      
    )
}

export default Hospital
