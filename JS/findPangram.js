/**
 * @description 
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 * because it uses the letters A - Z at least once(case is irrelevant).

    Given a string, detect whether or not it is a pangram.
    Return True
    if it is, False
    if not.Ignore numbers and punctuation.

 **/

 function isPangram(string) {

     // Declare Comparison Array
     let alphabet = 'abcdefghijklmnopqrstuvwxyz',
         filterOutChars = string.replace(/[\s,.0-9]+/g, '').trim(),
         stringArr = filterOutChars.toLowerCase().split(''),
         alphatized = stringArr.sort();

     // Remove Duplicates Letters from string;
     let uniqueArr = alphatized.filter(function (ele, index, self) {
         return index == self.indexOf(ele);
     });

     // Combine string and compare to alphabet
     return uniqueArr.join('') === alphabet ? true : false;

 }