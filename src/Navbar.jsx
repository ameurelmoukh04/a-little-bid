
function Navbar(){
    return (
        <nav style={styles.navbar}>
          {/* Logo Section */}
          <div style={styles.logo}>MyLogo</div>
    
          {/* Menu Section */}
          <ul style={styles.menu}>
            <li style={styles.menuItem}>Home</li>
            <li style={styles.menuItem}>About</li>
            <li style={styles.menuItem}>Services</li>
            <li style={styles.menuItem}>Contact</li>
          </ul>
    
          {/* Login Button */}
          <button style={styles.loginButton}>Login</button>
        </nav>
      );
    };
    
    const styles = {
      navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      },
      logo: {
        fontSize: "24px",
        fontWeight: "bold",
      },
      menu: {
        display: "flex",
        listStyle: "none",
        gap: "15px",
        padding: 0,
        margin: 0,
      },
      menuItem: {
        cursor: "pointer",
        fontSize: "16px",
      },
      loginButton: {
        padding: "8px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      },
    }


export default Navbar;