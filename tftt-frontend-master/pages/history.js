import HandDrawBox from '../components/HandDrawBox';

export default function History() {
  let text = "define this string here";
	
  return (
    <div className='bg-[url("../public/assets/tt8.jpg")] w-full h-screen bg-center bg-cover bg-fixed scroll-smooth'>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <HandDrawBox 
            title='Why Do We Use Tri Tip?' 
            text="Tri tip, a cut of beef from the bottom sirloin, has a rich history that spans back several decades. Originating in California, tri tip was originally considered a lesser-quality cut of meat and was typically used for ground beef or stew meat. It wasn't until the 1950s that the cut gained popularity as a flavorful and versatile option for barbecuing and roasting." 
            text1="The tri tip's rise to fame can be largely attributed to a Santa Maria-style barbecue, a cooking style that originated in the Santa Maria Valley in California. This style of barbecue is characterized by the use of a wood-fired pit and a specific seasoning blend that includes salt, pepper, and garlic. The tri tip is seasoned and slow-cooked over red oak wood, producing a tender and juicy cut of beef that is perfect for slicing and serving with a variety of sides."
            text2="Today, tri tip is a staple in California cuisine and is enjoyed by people all over the world. It has become a popular option for outdoor barbecues and family gatherings, and can be prepared in a variety of ways, including grilling, roasting, and smoking. Its popularity has also spread to other regions of the United States, with tri tip now being a common menu item at restaurants and butcher shops."
            text3="In conclusion, the history of tri tip is a testament to the evolution of American cuisine. What was once considered a lesser-quality cut of beef has now become a highly sought-after option for those looking for a delicious and flavorful meal. The Santa Maria-style barbecue has played a significant role in popularizing tri tip, and it remains an important part of California's culinary heritage."
            text4=" "
            variation="Light" 
          />
        </div>
			
        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <HandDrawBox 
                title='' 
                text="The History of Tri Tip In The Modern Age " 
                variation="Dark" 
                videoID="G80aK-8ihbU"
              />
			  <HandDrawBox 
                title='' 
                text='Breaking Down The Tri Tip Cut' 
                variation="Dark" 
                videoID="DD3hX14e6YU"
              />
            </div>
            <div className="md:w-1/2">
              <HandDrawBox 
                title='' 
                text='Why To Cut Off Silver Skin On Tri Tip' 
                variation="Dark" 
                videoID="-e04afT7ihQ"
              />
			  <HandDrawBox 
                title='' 
                text='Santa Maria BBQ Documentary' 
                variation="Dark" 
                videoID="mq1Mv2oWwpQ"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
