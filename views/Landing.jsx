const React = require('react');

// Inline CSS Styling

// Functional Component
const Landing = () => {

    // JSX
    return (
        <div style={styles.landing}>

            <h2 style={styles.title}>TinyBot</h2>


            <a href="/dashboard">
                <button style = {styles.button}>Start</button>
            </a>
        </div>
    );
};

const styles = {
    landing: {
        maxWidth: "360px",
        margin: "100px  auto",
        padding: "20px",

        display: " flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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