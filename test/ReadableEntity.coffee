assert = require('chai').assert

describe('ReadableEntity', ->
  ReadableEntity = require('../src/ReadableEntity');

#------------------------------------------------------------------------------------------
  ## constructor
  describe('#constructor', ->
    it('creating a ReadableEntity should not throw errors', ->
      readableEntity = new ReadableEntity()
    )
  )

#------------------------------------------------------------------------------------------
  ## getCurrentContent method
  describe('#getCurrentContent', ->
    it('Should be a callable function', ->
      assert.typeOf(new ReadableEntity().getCurrentContent,"function")
    )
    it('Should return an empty object when nothing is set', ->
      readableEntity = new ReadableEntity()
      assert.equal(JSON.stringify(readableEntity.getCurrentContent()),"{}")
    )

    it('Should get the last content pushed', ->
      ## test with three contents
      readableEntity = new ReadableEntity()
      assert.typeOf(readableEntity.updateContent,"function","updateContent is not callable")
      readableEntity.updateContent({content:"Test1"})

      lastContent = readableEntity.getCurrentContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test1","updateContent returned the wrong content")

      readableEntity.updateContent({content:"Test2"})

      lastContent = readableEntity.getCurrentContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test2","updateContent returned the wrong content")
     
      readableEntity.updateContent({content:"Test3"})

      lastContent = readableEntity.getCurrentContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test3","updateContent returned the wrong content")     
    )
  )

#------------------------------------------------------------------------------------------
  # eraseContent method
  describe('#eraseContent', ->
    it('Should be a callable function', ->
      assert.typeOf(new ReadableEntity().eraseContent,"function")
    )
    it('Should do nothing if nothing is set', ->
      readableEntity = new ReadableEntity()
      assert.typeOf(readableEntity.updateContent,"function","updateContent is not callable")
      readableEntity.eraseContent()
      assert.equal(JSON.stringify(readableEntity.getCurrentContent()),"{}")      
    )
    it('Should erase content when called', ->
      readableEntity = new ReadableEntity()

      # we push some content
      assert.typeOf(readableEntity.updateContent,"function","updateContent is not callable")
      readableEntity.updateContent({content:"Test1"})
      readableEntity.updateContent({content:"Test2"})
      lastContent = readableEntity.getCurrentContent()
      assert.equal(lastContent.content, "Test2","updateContent returned the wrong content")
      
      #now we erase everything
      readableEntity.eraseContent()

      # we test if the content is erased
      lastContent = readableEntity.getCurrentContent()
      assert.equal(JSON.stringify(lastContent),"{}","content is not erased")
    )
  )
#------------------------------------------------------------------------------------------
  describe('#getFirstContent', ->
    it('Should be a callable function', ->
      assert.typeOf(new ReadableEntity().getFirstContent,"function")
    )
    it('Should return an empty object when nothing is set', ->
      readableEntity = new ReadableEntity()
      assert.equal(JSON.stringify(readableEntity.getFirstContent()),"{}")
    )
    it('Should get the first content pushed', ->
      ## test with three contents
      readableEntity = new ReadableEntity()
      assert.typeOf(readableEntity.updateContent,"function","updateContent is not callable")
      readableEntity.updateContent({content:"Test1"})

      lastContent = readableEntity.getFirstContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test1","updateContent returned the wrong content")

      readableEntity.updateContent({content:"Test2"})

      lastContent = readableEntity.getFirstContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test1","updateContent returned the wrong content")
     
      readableEntity.updateContent({content:"Test3"})

      lastContent = readableEntity.getFirstContent()
      assert.typeOf(lastContent, "object","updateContent did not return a valid content")
      assert.typeOf(lastContent.content, "string","updateContent returned the wrong content")
      assert.equal(lastContent.content, "Test1","updateContent returned the wrong content")     
    )
  )
#------------------------------------------------------------------------------------------
  describe('#getContentList', ->
    it('Should be a callable function', ->
      assert.typeOf(new ReadableEntity().getContentList,"function")
    )
    it('Should return an empty array when nothing is set', ->
      readableEntity = new ReadableEntity()
      assert.equal(JSON.stringify(readableEntity.getContentList()),"[]")
    )
    it('Should get the list of content pushed', ->
      ## test with three contents
      readableEntity = new ReadableEntity()
      assert.typeOf(readableEntity.updateContent,"function","updateContent is not callable")
      readableEntity.updateContent({content:"Test1"})

      contentList = readableEntity.getContentList()
      assert.isArray(contentList, "getContentList() should return an array")
      assert.equal(contentList.length, 1, "The array returned is incorrect")
      assert.typeOf(contentList[0].content, "string","returned the wrong content")
      assert.equal(contentList[0].content, "Test1", "The content of the array returned is incorrect")

      readableEntity.updateContent({content:"Test2"})

      contentList = readableEntity.getContentList()
      assert.isArray(contentList, "getContentList() should return an array")
      assert.equal(contentList.length, 2, "The array returned is incorrect")
      assert.typeOf(contentList[0].content, "string","returned the wrong content")
      assert.equal(contentList[0].content, "Test1", "The content of the array returned is incorrect")
      assert.typeOf(contentList[1].content, "string","returned the wrong content")
      assert.equal(contentList[1].content, "Test2", "The content of the array returned is incorrect")

      readableEntity.updateContent({content:"Test3"})

      contentList = readableEntity.getContentList()
      assert.isArray(contentList, "getContentList() should return an array")
      assert.equal(contentList.length, 3, "The array returned is incorrect")
      assert.typeOf(contentList[0].content, "string","returned the wrong content")
      assert.equal(contentList[0].content, "Test1", "The content of the array returned is incorrect")
      assert.typeOf(contentList[1].content, "string","returned the wrong content")
      assert.equal(contentList[1].content, "Test2", "The content of the array returned is incorrect")
      assert.typeOf(contentList[2].content, "string","returned the wrong content")
      assert.equal(contentList[2].content, "Test3", "The content of the array returned is incorrect")
    )    
  )
#------------------------------------------------------------------------------------------
  describe('#updateContent', ->
    it('Should be a callable function', ->
      assert.typeOf(new ReadableEntity().updateContent,"function")
    )
    ## all other methods are using it into their test so I guess it should be enougth
  )
)