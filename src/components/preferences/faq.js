import React, { useState } from "react";
import DashboardNavbar from '../navbar/dashboardNavbar';
import '../../assets/css/faq.css';

const Faq = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [selectedQuestion, setSelectedQuestion] = useState(null); // Yeni eklenen state

   const handleCategoryClick = (category) => {
      if (selectedCategory === category) {
         setSelectedCategory(null);
      } else {
         setSelectedCategory(category);
         setSelectedQuestion(null); // Kategori değiştiğinde seçili soruyu sıfırla
      }
   };

   const handleQuestionClick = (questionIndex) => {
      setSelectedQuestion(questionIndex); // Soruya tıklandığında seçili soruyu güncelle
   };

   const categoryData = {
      "Lorem": [
         { question: "Question 1 for Lorem", answer: "Answer 1 for Lorem" },
         { question: "Question 2 for Lorem", answer: "Answer 2 for Lorem" },
         { question: "Question 3 for Lorem", answer: "Answer 3 for Lorem" },
         { question: "Question 4 for Lorem", answer: "Answer 4 for Lorem" }
      ],
      "Ipsum": [
         { question: "Question 1 for Lorem", answer: "Answer 1 for Lorem" },
         { question: "Question 2 for Lorem", answer: "Answer 2 for Lorem" }
      ],
      "Dolor": [
         { question: "Question 1 for Lorem", answer: "Answer 1 for Lorem" },
         { question: "Question 2 for Lorem", answer: "Answer 2 for Lorem" }
      ],
      "Sit": [
         { question: "Question 1 for Lorem", answer: "Answer 1 for Lorem" },
         { question: "Question 2 for Lorem", answer: "Answer 2 for Lorem" }
      ],
      "Amet": [
         { question: "Question 1 for Lorem", answer: "Answer 1 for Lorem" },
         { question: "Question 2 for Lorem", answer: "Answer 2 for Lorem" }
      ],

   };

   return (
      <React.Fragment>
         <DashboardNavbar />
         <div className="faq-title-container">
            <div className="faq-title">Sıkça Sorulan Sorular</div>
            <div className="search-bar">
               <input placeholder="Search" type="search" className="search-input" />
            </div>
         </div>

         <div className="faq-container">
            <div className="faq-category">
               <div className="faq-category-title">Kategoriler</div>
               {Object.keys(categoryData).map((category, index) => (
                  <div key={index} className="category-elements" onClick={() => handleCategoryClick(category)}>
                     {category}
                  </div>
               ))}
            </div>
            {selectedCategory && (
               <div className="faq-text-area">
                  {categoryData[selectedCategory].map((item, index) => (
                     <div key={index} onClick={() => handleQuestionClick(index)}>
                        <div className="faq-q">{item.question}</div>
                        {selectedQuestion === index && <div className="faq-a">{item.answer}</div>}
                     </div>
                  ))}
               </div>
            )}

         </div>
      </React.Fragment>
   );
};

export default Faq;
