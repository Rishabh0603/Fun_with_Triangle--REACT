import React from 'react'

const Questions = () => {
  return (
    <div>
      <form id="forms">
      <div className="questions">
        <p>
          What is the third angle for the triangle where angle1 = 45° and angle2
          = 90°?
        </p>
        <label>
          <input type="radio" name="1" value="45" className="bind" />
          45°
        </label>
        <label>
          <input type="radio" name="1" value="90" />
          90°
        </label>
        <label>
          <input type="radio" name="1" value="60" />
          60°
        </label>
      </div>
      <div className="questions">
        <p>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
        <label><input type="radio" name="2" value="obtuse"></input>Obtuse</label>
        <label><input type="radio" name="2" value="acute"></input>Acute</label>
        <label><input type="radio" name="2" value="right angle"></input>Right Angle</label>
      </div>
      <div className = "questions">
        <p>A triangle can have</p>
        <label><input type="radio" name="3" value="one right"></input>one right angle</label>
        <label><input type="radio" name="3" value="two right"></input>two right angle</label>
      </div>
      <div class="questions">
           <p> Which of the following can form a right angled triangle?</p>
           <label>
             <input type="radio" name="answer4" value="14, 15, 16"></input>14, 15, 26
           </label>
           <label> 
              <input type="radio" name="answer4" value="12, 16, 20"></input>12, 16, 20
           </label>
        </div>

        <div class="questions">
           <p> Which of the following triangles are always similar?</p>
         <label>
            <input type="radio" name="answer5" value="Equilateral triangle"></input>Equilateral triangle
          </label>
         <label>
            <input type="radio" name="answer5" value="Isosceles triangle"></input>Isosceles triangle
         </label>
        </div>

        <div class ="questions">
            <p>If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?</p>
           <label>
            <input type="radio" name="answer6" value="100°"></input>100°
           </label>
          <label> 
            <input type="radio" name="answer6" value="85°"></input>85°
          </label>
        </div>

        <div class="questions">
            <p>If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?</p>
         <label>
            <input type="radio" name="answer7" value="30°"></input>40°
         </label>
         <label>
            <input type="radio" name="answer7" value="10°"></input>10°
         </label>
        </div>

        <div class="questions">
            <p>The perimeter of scalene triangle with sides a, b, c is</p>
            <label>
            <input type="radio" name="answer8" value="a + b + c"></input>a + b + c
            </label>
            <label>
            <input type="radio" name="answer8" value = "2a"></input>2a
            </label>
            <label>
            <input type="radio" name="answer8" value = "None of these"></input>None of these
            </label>
        </div>

        <div class="questions">
           <p> A scalene triangle has __ line of symmetry</p>
         <label>
             <input type="radio" name="answer9" value="two"></input>two
         </label>
         <label>
         <input type="radio" name="answer9" value="no"></input>no
         </label>
         <label>
        <input type="radio" name="answer9" value="15"></input>15
    </label>
        </div>

        <div class="questions">
            <p>There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?</p>
         <label>
            <input type="radio" name="answer10" value="85°"></input>85°
         </label>
         <label>
            <input type="radio" name="answer10" value="65°"></input>65°
         </label>
         <label>
            <input type="radio" name="answer10" value="45°"></input>45°
         </label>
        </div>
     </form>
    </div>
  )
}

export default Questions
