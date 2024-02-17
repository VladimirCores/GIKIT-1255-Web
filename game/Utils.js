class Utils {
  static getCssPositionProperty = (element, property) => {
    return parseInt(window.getComputedStyle(element, null).getPropertyValue(property).replace('px', ''));
  }
}

export default Utils;