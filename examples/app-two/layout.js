import { About } from "../../src/components/About";
import { ActionComp } from "../../src/components/ActionComp";
import { Comp5 } from "../../src/components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "../../src/components/Home";
import { RandomPic } from "../../src/components/RandomPic";
import { rowStyle, styles } from "../common";

const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" }
  }
};

// *****************************************************
// import all your available components and export from one `componentsSet` object
// All component which will be rendered
// *****************************************************
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic
  // JsonForm
};

// *****************************************************
// declare all the layout changes that your application
//  would have, and declare them as different `routes` insed a `routes` object which is exported.
// *****************************************************
export const routes = {};
routes.routeOne = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize

          colStyle: { display: "none" } // *** hide the 1st column
        }
      }
    },
    1: {
      layout: {
        colConfig: {
          colSize: 8 // *** change the colSize
        },

        1: {
          // *** below we are adding a new row(this will replace current layout config values), and this will have 2 columns
          0: {
            // col no
            colSize: 10,
            idx: "RandomPic",
            label: "comp5 >> changed at runtime 1"
          },
          1: {
            // col no
            colSize: 10,
            idx: "RandomPic",
            label: "comp5 >> changed at runtime 2"
          }
        }
      }
    }
  }
};

routes.routeTwo = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize
          colStyle: { display: "block" } // *** hide the 1st column
        }
      }
    },
    1: {
      layout: {
        colConfig: {
          colSize: 3 // *** change the colSize
        },

        1: {
          // *** below we are adding a new row(this will replace current layout config values), and this will have 2 columns
          0: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 1"
          },
          1: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 2"
          }
        }
      }
    }
  }
};

// *************************************************
//  exported `appConfig` object - represents initial Layout configuration
// *************************************************
export const appConfig = {
  componentsSet,
  links: {
    "/": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Home"
    },
    "/about": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Feed"
    },
    "/contact": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Messages"
    }
  },
  layout: {
    colConfig: {
      colSize: 1
    },
    // row no
    0: {
      rowConfig: {
        rowSize: 1,
        rowStyle: { height: "100vh" }
      },
      // col no
      0: {
        layout: {
          colConfig: {
            colSize: 2
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "5vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "home",
              colStyle: { borderWidth: 4 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "90vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "About",
              label: "about",
              colStyle: { borderWidth: 4 }
            },
            1: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5",
              colStyle: { borderWidth: 4 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 4,
              idx: "RandomPic",
              label: "rpic",
              colStyle: { borderWidth: 4 }
            }
          }
        }
      },
      1: {
        layout: {
          colConfig: {
            colSize: 5
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 24,
              idx: "Comp5",
              label: "comp5.11",
              schema,
              colStyle: { borderWidth: 4 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 12,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5.12",
              schema,
              colStyle: { borderWidth: 4 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },

            0: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5.13",
              schema,
              colStyle: { borderWidth: 4 }
            }
          }
        }
      }
    }
  }
};
