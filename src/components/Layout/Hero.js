import React from 'react'


const hero = () => {
    return {
< div style = { divStyle } >
        <Container fliuid='true' className='hero'>
            <div className='delivering mt-5'>

                <Row className="justify-content-md-center">

                    <Col md="auto" className='hero_heading'>
                        <h1 className='hero_heading--main'>Everything you need,</h1>
                        <h1 className='hero_heading--span'>delivered within minutes</h1>
                    </Col>

                </Row>
                <Row>

                    <h5 className='delivering_title'>Delivering to</h5>
                </Row>
                <Row>

                    <Col>
                        <Select
                            styles={cityStyles()}
                            placeholder={cityPlaceholder}
                            isClearable
                            onChange={this.cityChange}
                            onInputChange={this.handleCityChange}
                            options={cityOptions}
                            components={animated}

                        />

                    </Col>
                    <Col className={this.state.disabled ? 'disabledPointer' : this.state.disabledPointer}>
                        <Select

                            styles={areaStyles()}
                            placeholder={areaPlaceholder}
                            isClearable
                            isMulti
                            onChange={this.areaChange}
                            onInputChange={this.handleAreaChange}
                            options={this.props.areas}
                            isDisabled={this.state.disabled}
                            components={animated}
                            value={this.state.newArea}
                        />
                    </Col>


                </Row>
            </div>

            <div className='services'>

                <Row>

                    <h5 className='services_heading'>Select Service</h5>
                </Row>
                <Row>

                    <Col>
                        <h5 className='services_title'>Restaurants</h5>
                        <p className='services_description'>Food you love, from restaurants near you</p>
                    </Col>
                    <Col>
                        <h5 className='services_title'>SuperMarkets</h5>
                        <p className='services_description'>Food you love, from restaurants near you</p>
                    </Col>

                </Row>
                <Row>

                    <Col>
                        <h5 className='services_title'>Pharmacies</h5>
                        <p className='services_description'>Food you love, from restaurants near you</p>
                    </Col>
                    <Col>
                        <h5 className='services_title'>Shopping</h5>
                        <p className='services_description'>Food you love, from restaurants near you</p>
                    </Col>

                </Row>


            </div>
        </Container>
</ >
}}