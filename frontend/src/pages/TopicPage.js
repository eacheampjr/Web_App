import React from 'react';

function TopicsPage() {
  return (
    <main>
      <section>   
        <h2>Web Development Concepts</h2>
        <nav className="local">
          <ul>
            <li><a href="#servers">Servers</a></li>
            <li><a href="#frontend">Frontend</a></li>
            <li><a href="#image">Optimizing</a></li>
            <li><a href="#favicons">Favicons</a></li>
            <li><a href="#stylesheets">Stylesheets</a></li>
            <li><a href="#usability">Usability</a></li>
            <li><a href="#technologies">Technologies</a></li>
          </ul>
        </nav>

    <article id = "servers">
        <h3>Web Servers</h3>
        <p>A <strong>designated home</strong> page is the first page often displayed on a website. Home 
            pages are meant to give an overall impression of what a website can do for a 
            client or a viewer. In the context of websites and web servers, index files 
            such as index.html are regularly retrieved as the path to resources to generate 
            the default display of a website, the home page. 
            This is regularly done if no specific resource or file is requested in the URL. 
            The ability for a default display through index files allows for friendly usability, 
            and should a home page serve its purpose, it should easily help clients and users direct 
            themselves to the resource that they are looking for.  </p>

        <p>As a website developer, the <strong>inspector network tab</strong> is an excellent tool to use to 
            quickly gather information about the functionality of any website. From the Network 
            tab, there are three main things that can be observed. The general headers, 
            the response headers, and the request headers. These headers provide great insight 
            into the status code, HTTP request, and HTTP response. Interestingly, 
            these file details are different when viewed from the web server versus the local computer. 
            The request URL changes and the remote address is redacted when the network inspector is viewed 
            from a local computer. Likewise, in the response and request headers, there are only two pieces of 
            information displayed in each section. Information such as the date modified and the content type is visible 
            when viewed from the local computer, but when viewed from a web server, we can see additional information such as 
            connection, content encoding, server, host, and user agent. </p>

        <p><strong>Status codes</strong> are a way for the inspector network to communicate with us with regard 
            to the functionality of certain aspects of a website. In this website's current state, 
            we can see in the inspector that the status code for the favicon.ico file is 200. This 
            means that the request for our default favicon.ico file was successful. We can see that 
            it was successful because it is displayed in the web browser tab. Now, the main.css and main.js 
            files show a status of 404. The Cascading Style Sheets and JavaScript not found error is to be 
            expected at this point in this website's infancy due to not having these programs on the website yet.</p>

        <p>Understanding <strong>parts of a URL</strong> as a web developer is important to understand how the URL is influencing 
        a website. Let us take the URL to this website as an example: 
        https://web.engr.oregonstate.edu/~acheampe/a1-acheampe/. The 'https://' is 
        what is known as the scheme. A scheme indicates to us which protocol the web 
        client must use to request the source information. In this particular link, 
        there are two subdomains that follow the scheme: 'web' and 'engr.' Subdomains 
        help categorize a website into separate sections, often by what they represent. 
        The subdomain is then followed by the domain and extension, in this case, 'oregonstate.edu.' 
        The domain name allows for a transfer to an IP address to accurately request and retrieve information. 
        This is then followed by the path to the page or the resource, in our case, the '~acheampe/a1-acheampe,' 
        which allows for the retrieval of the information that you are currently looking at. </p>
    </article>

<article id = "frontend">
    <h3>Frontend Design</h3>

    <p>
        <strong>Frontend design</strong> is what glues everything behind a website together to make 
        it presentable. Frontend design utilizes the graphical user interface, visual 
        design, and an interactive experience to maintain a user's attention. Often, 
        frontend design allows navigation to other pages on the website. It will 
        include a consistent color scheme, font, and photography to help represent 
        what the website is all about without losing the user's interest. Frontend 
        design allows for users to easily navigate the website at hand, should it 
        achieve its full purpose.
    </p>

    <p>
        A website must be easily used. Usability is a concept that is often kept 
        in mind through the five E's when building the front end of a website. 
        The  <strong>five E's</strong> are:
    </p>
    
    <dl>
        <dt><strong>Effectiveness</strong>:</dt>
        <dd>Allows user to achieve their desired outcome.</dd>
        
        <dt><strong>Efficient</strong>:</dt>
        <dd>Allows the user to achieve their desired outcome as quickly or as fast as possible.</dd>
        
        <dt><strong>Easy to navigate</strong>:</dt>
        <dd>Frontend design that allows for intuitive understanding and use of the website.</dd>
        
        <dt><strong>Error-free</strong>:</dt>
        <dd>Able to utilize website without hitting roadblocks.</dd>
        
        <dt><strong>Enjoyable or engaging to use</strong>:</dt>
        <dd>Able to maintain the user's attention and foster the user's desire to 
        come back to interact with the website again.</dd>
    </dl>

    <p>
        <strong>Page layout tags</strong> are block-level elements that contribute to the break-up 
        of the flow of the content. Page layout tags consist of a header, navigation, 
        main element, article, aside, figure, blockquote, footer, and division element. 
        The <strong>header tag</strong> is the banner of the website that may incorporate the website 
        and market design. The <strong>navigation tag</strong>, allows the user to explore other pages 
        of the website. The <strong>main element</strong> is the primary block, which contains the 
        contents of the website. The <strong>section element</strong>, is part of the main element 
        that groups contents that are all related. The <strong>article element</strong>, is utilized 
        inside the section element with a single, specific topic. <strong>Aside elements</strong> 
        allow for related content to be displayed differently. A <strong>figure element</strong>, 
        much like an aside, is used to include media alongside the main content. 
        <strong>Blockquote elements</strong> are for extended quotes that have a distinct visual 
        appearance to stand out from other text. The <strong>footer element</strong> is used below 
        the main element to relay legal information, contact information, links 
        to critical pages, and the copyright of the website. Lastly, the <strong>division 
        element</strong> is used dynamically as a placeholder content but can be used to 
        divide content when other elements do not quite make sense.
    </p>

    <p>
        <strong>Anchors</strong> increases ease of navigation and effectiveness of a website by 
        utilizing hyperlinks to surf the web. There are three modes of anchor links. 
        There is anchor link to external content, internal content, and from page-to-page. 

        <ol>
            <li><strong>External Anchor</strong>: The external anchor link is implemented by inserting a 
            URL between the anchor link and a precise description of the link to allow 
            users to understand where the link will take them.</li>
    
            <li><strong>Internal Anchor</strong>: Internal anchor links to other text on a webpage via 
            utilization of ID to topic with a descriptor to allow the user to 
            understand where the page will jump to if interacted with.</li>
            
            <li><strong>From page to page</strong>: Page to page links are implemented by encapsulating 
            the navigation element around anchors, with each anchor directing to its 
            corresponding path to a resource.</li>
        </ol>
    </p>

</article>

<article id = "image">
    <h3>Optimizing Images</h3>
    <p>
        The <strong>six major specifications</strong> of images for the web are: descriptive file
         name, small file size, exact dimensions, correct file format, reduced 
         resolution, and color mode. These specifications are relevant because 
         they allow for search engine optimization, and most important to retaining 
         clients' attention, they allow for the possible fastest load time. The 
         file formats most appropriate for photos are JPG and WebP. This is because 
         they are compressed down to reduce load time on the web. PNG and SVG, on 
         the other hand, are great for line art. PNG is great for line art because 
         it has the capability of lossless compression, meaning that image quality 
         is preserved with compression, and in addition, it allows for transparency, 
         a useful feature to overlay line art on backgrounds. SVG is also great 
         for line art due to its vector graphics, which allow line art to be scaled 
         to any size without loss of quality.
    </p>
</article>

<article id = "favicons">
    <h3>Favicons</h3>
    <p>
        Browsers and devices use <strong>favicons</strong> to identify and launch 
        websites and apps. Favicons also allows for quick identification of the 
        website in a browser tab, a smartwatch, a cellphone, and on a web search 
        engine list. They enhance bookmarking to allow users to quickly identify 
        saved websites. Their ability to be quickly identified is also taken advantage 
        of during web searches. For favicons to be effective, they should usually be in a .ico 
        format, with a common dimension size of 32×32 pixels, and other times 16×16 
        pixels. Ultimately, having varying sizes allows for adaptability to multiple devices. 
        Favicons are integrated into HTML by adding them within the 'head' section 
        of the HTML document.
    </p>
</article>


<article id = "stylesheets">
    <h3>Cascading Stylesheets</h3>
    <p>
        One reason to incorporate stylesheets into websites is that they allow 
        for the ability to move away from HTML-standardized formatting. This 
        allows for a unique look for a website. Most importantly, using stylesheets 
        will help improve the usability, readability, and legibility of a website 
        while maintaining brand requirements. 
    </p>

    <p>
        The five ways to incorporate styles are through the preferred method of 
        externally linked CSS files. This occurs either through linking a stylesheet
         to the global head of an area of a website or linking a stylesheet to 
         specific components after a global CSS file. Though an externally 
         linked CSS file is preferred due to its efficiency, a style sheet can be 
         linked directly to HTML or JavaScript in three ways in addition to the 
         two external ways mentioned. The three ways are embedding a stylesheet 
         within a style in a tag, inline within an element, or manipulating the 
         document object model. All these ways to incorporate styles make it 
         easier for developers to adhere to maintaining brand requirements and 
         makes it easier to achieve a unique website. 
    </p>
</article>

<article id="usability">
    <p>
        Accessible websites are important for the inclusive usability of the web. 
        There are six major goals of an accessible form. These goals are: 

        <ol>
            <li><strong>Providing clear instructions</strong> to improve visibility and 
                understanding of what a website may want.</li>
    
            <li>Being clear as to <strong>why data is needed</strong> and what is required to set 
                expectations and limit bots flooding servers.</li>
                
            <li>The <strong>first field must be set to autofocus</strong> to allow users to start
                 navigating the website without the need to use a mouse or trackpad.
                  This is especially useful for those who cannot use a mouse or trackpad.</li>

            <li>We must ensure that the form can be filled out in its entirety 
            <strong>with just a keyboard</strong>. Again, this is especially useful for those 
                who cannot use a mouse or trackpad.</li>
            
            <li><strong>Tap indexing on complex forms</strong> to set expectations on the order 
                in which the form should be fielded.</li>

            <li><strong>Validation messages</strong>, such as confirmations, are screen-readable 
                to let users know what has occurred with their input.</li>
        </ol>
    </p>

    <p>
        The major tags that helps with HTML forms are the <strong>form tag and the input tag</strong>. 
        The form tag allows for developers to create an HTML form for user input. 
        The attributes associated with the form tag are action and method. 
        Action specifies where to send form data when the form is submitted. 
        Method devices provide a way for sending data, either through GET or POST.
    </p>

    <p>
        The <strong>input tag</strong> is the most common way for data entry to collect information 
        from users. An input tag is unique in the sense that it has a 'type' 
        attribute that changes how it is interacted with and displayed. 
        Another necessary attribute of input is the 'name'. The name attribute is 
        essential for how servers organize information and know which part of the 
        form each data item is associated with. 
    </p>

    <p>
        The major form style recommendations to improve usability are two-fold. 
        First, is to be considerate of the <strong>size and placements</strong> of labels. 
        Second, is <strong>utilizing color, contrast, and spacing</strong>. 
        Utilizing these form styling recommendations helps ease the user's 
        ability to interact with the website by improving overall visibility 
        and setting a direct expectation of what a form requires.
    </p>
</article>

<article id="technologies">
    <p>
        Node, NPM, and Express are three technologies that helps the developer 
        improve the web development experience.

        <ol>
            <li><strong>Node</strong>: Node.js is a free program that runs across 
                different devices and is an integral part of creating server and 
                network programs. It greatly contributes to building efficient 
                and scalable web services and applications.</li>
    
            <li><strong>npm</strong>: An 'npm,' on the other hand, is used to 
                create and run apps for the website that we are building. 
                It is a package manager for Node.js that is an online repository 
                for publishing Node.js packages. It is also used as a command line 
                that installs packages from the online repository and manages the 
                dependencies we define and create for our projects.</li>
            
            <li><strong>Express</strong>: Express.js is a framework for creating 
                web applications within the Node.js environment. It offers a 
                robust set of features for web and mobile applications and 
                streamlines the development process by providing a layer of 
                fundamental web application features, without obscuring Node.js 
                features. Express.js simplifies the server creation process by 
                allowing developers to define routes to send and receive data 
                using HTTP methods such as GET, POST, and DELETE. Additionally, 
                it manages the details of listening on ports and determining the 
                paths data will take through the application.</li>
        </ol>
    </p>

</article>

</section> 
</main>
);
}

export default TopicsPage;
