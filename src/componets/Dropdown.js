
import React, { useState } from "react";
import { productDropdown, ourstoryDropdown, userLoginDropdown, userLogoutDropdown } from "./Navitems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export const ProDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return <>
    <ul className={dropdown ? "product-submenu clicked" : "product-submenu"}
      onClick={() => setDropdown(!dropdown)}>
      {
        productDropdown.map(item => {
          return (


            <li key={item.id} className={item.cName}
              onClick={() => setDropdown(false)}>
              <Link to={item.path}>{item.title}</Link>

            </li>

          )
        })
      }

    </ul>
  </>

};

export const OsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return <>
    <ul className={dropdown ? "product-submenu clicked" : "product-submenu"}
      onClick={() => setDropdown(!dropdown)}>
      {
        ourstoryDropdown.map(item => {
          return (


            <li key={item.id} className={item.cName}
              onClick={() => setDropdown(false)}>
              <Link to={item.path}>{item.title}</Link>

            </li>

          )
        })
      }

    </ul>
  </>

};
export const UsLoginDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
   
      <ul className={dropdown ? "product-submenu clicked" : "product-submenu"}
      onClick={() => setDropdown(!dropdown)}>
      {
        userLoginDropdown.map(item => {
          return (


            <li key={item.id} className={item.cName}
              onClick={() => setDropdown(false)}>
              <Link to={item.path}>{item.title}</Link>

            </li>

          )
        })
      }

import React, { useState, useEffect } from "react";
import {productDropdown,ourstoryDropdown,userLoginDropdown,userLogoutDropdown} from "./Navitems";
import { Link} from "react-router-dom";
import "./Dropdown.css";

// Add this favorites counter function
const getFavoritesCount = () => {
    const count = Object.keys(localStorage)
        .filter(key => key.startsWith('favorite-') && !key.includes('data'))
        .length;
    return count;
};

export const ProDropdown =()=>{
    const [dropdown,setDropdown] =useState(false);
    return <>
    <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
     onClick={()=> setDropdown(!dropdown)}>
        {
            productDropdown.map(item=>{
                return (
                    
                
              <li key={item.id} className={item.cName}
              onClick={()=> setDropdown(false)}>
                <Link to={item.path}>{item.title}</Link>
                  
              </li>
                
                )
            })
        }


    </ul>
    

  );
};



export const UsLogoutDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return <>
    <ul className={dropdown ? "product-submenu clicked" : "product-submenu"}
      onClick={() => setDropdown(!dropdown)}>
      {
        userLogoutDropdown.map(item => {
          return (


            <li key={item.id} className={item.cName}
              onClick={() => setDropdown(false)}>
              <Link to={item.path}>{item.title}</Link>

            </li>

          )
        })
      }

    </ul>
  </>

};


        </ul>
            </>
        
          };

          export const UsLoginDropdown =()=>{
            const [dropdown,setDropdown] =useState(false);
            const [favoritesCount, setFavoritesCount] = useState(0);

            // Update favorites count when dropdown opens
            useEffect(() => {
                setFavoritesCount(getFavoritesCount());
                
                // Listen for favorites updates
                const handleFavoritesUpdate = () => {
                    setFavoritesCount(getFavoritesCount());
                };
                
                window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
                window.addEventListener('storage', handleFavoritesUpdate);
                
                return () => {
                    window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
                    window.removeEventListener('storage', handleFavoritesUpdate);
                };
            }, []);

            return <>
            <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
             onClick={()=> setDropdown(!dropdown)}>
                {
                    userLoginDropdown.map(item=>{
                        return (
                            
                        
                      <li key={item.id} className={item.cName}
                      onClick={()=> setDropdown(false)}>
                        <Link to={item.path}>
                            {item.path === "./favorites" 
                                ? `❤️ favorites (${favoritesCount})` 
                                : item.title
                            }
                        </Link>
                          
                      </li>

                        
                        )
                    })
                }
        
            </ul>
                </>
            
              };

              export const UsLogoutDropdown =()=>{
                const [dropdown,setDropdown] =useState(false);
                return <>
                <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
                 onClick={()=> setDropdown(!dropdown)}>
                    {
                        userLogoutDropdown.map(item=>{
                            return (
                                
                            
                          <li key={item.id} className={item.cName}
                          onClick={()=> setDropdown(false)}>
                            <Link to={item.path}>{item.title}</Link>
                              
                          </li>
                            
                            )
                        })
                    }
            
                </ul>
                    </>
                
                  };

