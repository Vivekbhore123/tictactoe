import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import Icons from "./components/Icons.js";

//toastify code
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


const itemArray = new Array(9).fill("empty");

const App = () => {
  
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [isShown, setIsShown] = useState(false);

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };

  const checkIsWinner = () => {
    if (itemArray[0] !== "empty"
     && itemArray[1] !== "empty" 
     && itemArray[2] !== "empty"
     && itemArray[3] !== "empty"
     && itemArray[4] !== "empty"
     && itemArray[5] !== "empty"
     && itemArray[6] !== "empty"
     && itemArray[7] !== "empty"
     && itemArray[8] !== "empty")
     {
       setWinMessage(`match draw `);
     }
      if (
        itemArray[0] === itemArray[1] &&
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wins`);
      } else if (
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5] &&
        itemArray[3] !== "empty"
      ) {
        setWinMessage(`${itemArray[3]} wins`);
      } else if (
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8] &&
        itemArray[8] !== "empty"
      ) {
        setWinMessage(`${itemArray[8]} wins`);
      } else if (
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6] &&
        itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wins`);
      } else if (
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7] &&
        itemArray[1] !== "empty"
      ) {
        setWinMessage(`${itemArray[1]} wins`);
      } else if (
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8] &&
        itemArray[2] !== "empty"
      ) {
        setWinMessage(`${itemArray[2]} wins`);
      } else if (
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8] &&
        itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wins`);
      } else if (
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6] &&
        itemArray[2] !== "empty"
      ) {
        setWinMessage(`${itemArray[2]} wins`);
      }

  };

  // const execute = () =>{
  //    document.getElementsByClassName("mouse").style.curser="pointer";
  // }

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }
    else{
      return toast("already filled",{type:"error"})
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <h1 style={{ color: "white" }}>Tic Tac Toe</h1>
      {isShown && <div style={{ color: "white" }}>hii</div>}
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              Its {isCross ? "cross" : "circle"} turn
            </h1>
          )}
          <div className="grid">
            {/* {(
              <h1 style={{color:"white"}}>hii</h1>
            )} */}
            {itemArray.map((item, index) => {
              if (itemArray[index] === "empty") {
                return (
                  <Card
                    className="animate zoom"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    style={{ cursor: "pointer" }}
                    color="warning"
                    onClick={() => changeItem(index)}
                  >
                    <CardBody className="box">
                      <Icons name={item} />
                    </CardBody>
                  </Card>
                );
              } else {
                return (
                  <Card
                    className="animate zoom"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    style={{ cursor: "pointer" }}
                    color="success"
                    onClick={() => changeItem(index)}
                  >
                    <CardBody className="box">
                      <Icons name={item} />
                    </CardBody>
                  </Card>
                );
              }
            })}
          </div>
        </Col>
      </Row>
      <code style={{ color: "white" }}>Made by Vivek Bhore</code>
    </Container>
  );
}

export default App;
