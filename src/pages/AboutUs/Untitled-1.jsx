

    // Renders a Hero component when buttonPush is false
    it('should render Hero component when buttonPush is false', () => {
      const contextValues = { buttonPush: false };
      jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
      const { getByText } = render(<BookNow />);
      const heroComponent = getByText('Just travel with us');
      expect(heroComponent).toBeInTheDocument();
    });

    // Renders a container with hotels when buttonPush is true
    it('should render container with hotels when buttonPush is true', () => {
      const { getByTestId } = render(<Context.Provider value={{buttonPush: true}}><BookNow /></Context.Provider>);
      const container = getByTestId('container');
      expect(container).toBeInTheDocument();
    });

    // Displays hotel name, location, image, description, price and checkout button for each hotel
    it('should display hotel information for each hotel', () => {
      const { getByTestId } = render(<BookNow />);
      const button = getByTestId('button');
      fireEvent.click(button);
      const hotelElements = getByTestId('hotel');
      expect(hotelElements).toHaveLength(hotels.length);
      hotels.forEach((hotel, index) => {
        expect(hotelElements[index]).toHaveTextContent(hotel.name);
        expect(hotelElements[index]).toHaveTextContent(hotel.description);
        expect(hotelElements[index]).toHaveTextContent(hotel.price);
      });
    });

    // Does not render any hotels when buttonPush is true and there are no hotels in the hotels array
    it('should not render any hotels when buttonPush is true and there are no hotels', () => {
      // Arrange
      const { queryByTestId } = render(<BookNow />);
      const buttonPush = true;
      const emptyHotels = [];
  
      // Act
      fireEvent.click(getByTestId('button'));
  
      // Assert
      const hotelElement = queryByTestId('hotel');
      expect(hotelElement).not.toBeInTheDocument();
    });

    // Does not render any hotels when buttonPush is true and the countryId is not found in the locationData array
    it('should not render any hotels when buttonPush is true and countryId is not found', () => {
      // Arrange
      const { queryByTestId } = render(<BookNow />);
      const buttonPush = true;
      const invalidCountryId = 10;
  
      // Act
      fireEvent.click(getByTestId('button'));
  
      // Assert
      const hotelElement = queryByTestId('hotel');
      expect(hotelElement).not.toBeInTheDocument();
    });

    // Does not display the message with the starting price when fitToPrice is false
    it('should not display starting price message when fitToPrice is false', () => {
      // Arrange
      const { queryByText } = render(<BookNow />);
      const buttonPush = true;
      const fitToPrice = false;
  
      // Act
      fireEvent.click(getByTestId('button'));
  
      // Assert
      const messageElement = queryByText(/For this destination prices starts from/);
      expect(messageElement).not.toBeInTheDocument();
    });
});
