# Idea

The caesarCipher function is supposed to take a string along with an int key to shift it accordingly.
The `string` is provided to shift the letters based on the `key`.

# Algorithm & Requirements

- Get `string` and `key`
- Validate input:
  - Only english letters
  - Same punctuation marks & numbers
- Shift `string` based on `key`
  - Keep letters' case
  - Keep punctuation marks
  - keep between a-z/A-Z
- Return shifted `string`
  - Input: `caesarCipher("Hello!", 2)`
  - Output: "Jgnnq!"
