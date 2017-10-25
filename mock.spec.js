function MockAuthen(authService) {
    this.authService = authService

    this.MockA = (id) => {
        var amazon = this.authService(id)
        return {
            bookname: amazon.bookname,
            covers: amazon.covers,
            isbn: '1234567890123'
        }
    }
}

test('FacebookAuthen', ()=> {
    //Arrange
    const mockAmazonAuthen = jest.fn()
        .mockReturnValue({
            bookname:'adaymagazine',
            covers:'/covers/img/aday.jpg',
            isbn:'1234567890123'
        })
    var app = new MockAuthen(mockAmazonAuthen)

    //Act
    var id = '1234567890123'
    var result = app.MockA(id)

    //Assert
    expect(mockAmazonAuthen).toHaveBeenCalled()
    expect(mockAmazonAuthen).toHaveBeenCalledWith(id)
    expect(result).toHaveProperty('bookname')
    expect(result).toHaveProperty('covers')
    expect(result).toHaveProperty('isbn')
    expect(result.bookname).toBe('adaymagazine')
    expect(result.covers).toBe('/covers/img/aday.jpg')
    expect(result.isbn).toHaveLength(13)

})
