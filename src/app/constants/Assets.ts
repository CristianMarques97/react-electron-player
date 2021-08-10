import getVar from ".";

class AppAssets {
    URL: string = getVar("REACT_APP_ASSETS_URL", "")
}

export default new AppAssets()