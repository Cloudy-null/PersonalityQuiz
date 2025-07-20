import React from 'react'

export default function QuestionComponent() {
    return (
        <div class="custom-radio-group">
            <h2 dir="rtl" lang="ar">تفضل تشتغل كيف؟</h2>
            <label class="custom-radio-container">
                <input type="radio" name="work-style" value="option1" />
                <span class="custom-radio-checkmark"></span>
                لوحدي وبتركيز
            </label>
            <label class="custom-radio-container">
                <input type="radio" name="work-style" value="option2" />
                <span class="custom-radio-checkmark"></span>
                مع فريق صغير
            </label>
            <label class="custom-radio-container">
                <input type="radio" name="work-style" value="option3" />
                <span class="custom-radio-checkmark"></span>
                في أجواء الهاكاثونات
            </label>
            <label class="custom-radio-container">
                <input type="radio" name="work-style" value="option4" />
                <span class="custom-radio-checkmark"></span>
                بشكل غير مباشر عبر Github
            </label>
            <label class="custom-radio-container">
                <input type="radio" name="work-style" value="option5" />
                <span class="custom-radio-checkmark"></span>
                مرن جداً واقدر اتعامل معها كلها
            </label>
            <button>Submit</button>
        </div>
    )
}
