// Enums or enumerations are a new data type supported in TypeScript.
// - There are three types of enums:
// -    Numeric enum
// -    String enum
// -    Heterogeneous enum


// 1 Numeric enums are number-based enums i.e. they store string values as numbers.
// Example: Numeric Enum
enum PrintMedia {
  Newspaper,    // 0
  Newsletter,   // 1
  Magazine,     // 2
  Book          // 3
};

//Example: Enum as Return Type
enum PrintMedia2 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia2 {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia2.Magazine;
    }
 };

let mediaType: PrintMedia2 = getMedia('Forbes'); // returns Magazine

// Example: String Enum
enum PrintMedia3 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum
PrintMedia3.Newspaper; //returns NEWSPAPER
PrintMedia3['Magazine'];//returns MAGAZINE

// Example: Heterogeneous Enum
enum Status {
    Active = 'ACTIVE',
    Deactivate = 1,
    Pending
}