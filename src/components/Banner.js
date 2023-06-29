import React from 'react';
import { useState,useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
 
export const  Banner=() =>{
     const [loopNum,setLoopNum]=useState(0);
     const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["web Developer","webDesigner",'UI/UX Designer'  ];
    const[text,setText]=useState('');
    const [delta,setDelta]= useState(300-Math.random()*100);
    const period=2000;
    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();

        },delta )
        return()=>{clearInterval(ticker)};

    },[text])
    
    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let UpdatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(UpdatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && UpdatedText==fullText){
            setIsDeleting(true);
          
            setDelta(period);

        }
        else if(isDeleting && UpdatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline' > wellcome to my portfolio</span>
                    <h1>{`Hi iam webencoder`}<span className='wrap'>{text}  </span></h1>
                    <p>lorem34
                        ufhjeskfvhjdsbchbhcjgskhvskuhvuilwsvkhhfls,vjkfhdvhbfjvhbfjvhkjhvf

                    </p>
                    <button onClick={()=>console.log('connect')}> Lets connect<ArrowRightCircle size={25}/> </button>
                </Col>

                <Col xs={12} md={6} xl={5}>
                <img src={headerImg}  alt='Header Img'/>
                </Col>
               

            </Row>
        </Container>



    </section>

  )
}

export default Banner;
