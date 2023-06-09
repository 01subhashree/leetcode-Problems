function isValid(s) {
  const stack = [];

  for (i = 0; i < s.length; i++) {
    let curChar = s[i];

    switch (curChar) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        topElement = stack.pop();
        if (curChar !== topElement) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}"));
