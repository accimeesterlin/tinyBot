const React = require('react');

// Functional Component
const Landing = () => {

    // JSX
    return (

        <div style={styles.landing}>

            <h2 style={styles.title}>tinyBot</h2>


            <a href="/dashboard">
                <img src="/images/logo.jpg" alt="" style = {styles.image}/>
            </a>
        </div>
    );
};


// Heroku 
// BitBot
    // link

// Heroku
// TinyBot
    // link




// Inline Styling - React
const styles = {

    image: {
        width: "200px",
        height: "200px"
    },

    landing: {
        maxWidth: "360px",
        margin: "100px  auto",
        padding: "20px",
        display: " flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "family",
    },

    title: {
        fontSize: "45px"
       
    },

    button: {
        padding: "10px",
        borderRadius: "4px",
        width: "150px",
        cursor: "pointer",
    }
};



module.exports = Landing;