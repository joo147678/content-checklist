import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import './App.css';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

interface Step {
  id: string;
  title: string;
  items: ChecklistItem[];
}

interface Phase {
  id: string;
  title: string;
  icon: string;
  steps: Step[];
  expanded: boolean;
}

function App() {
  const [phases, setPhases] = useState<Phase[]>([
    {
      id: 'phase1',
      title: 'المرحلة الأولى: التحضير والإعداد',
      icon: '🎯',
      expanded: true,
      steps: [
        {
          id: 'step1',
          title: 'الخطوة 1: تحديد البيرسونا والبوزيشن',
          items: [
            { id: '1-1', text: 'تحديد السن', checked: false },
            { id: '1-2', text: 'تحديد الاهتمامات', checked: false },
            { id: '1-3', text: 'تحديد المشاكل اللي عندهم', checked: false },
            { id: '1-4', text: 'توضيح مين أنت', checked: false },
            { id: '1-5', text: 'توضيح بتعمل إيه بالظبط', checked: false },
            { id: '1-6', text: 'التأكد إن أي حد يدخل البروفايل يفهم بتعمل إيه بوضوح وبساطة', checked: false },
          ],
        },
        {
          id: 'step2',
          title: 'الخطوة 2: تحديد المجال (Niche)',
          items: [
            { id: '2-1', text: 'اختيار niche واحد محدد', checked: false },
            { id: '2-2', text: 'التركيز على المجال ده فقط', checked: false },
          ],
        },
      ],
    },
    {
      id: 'phase2',
      title: 'المرحلة الثانية: البحث والأفكار',
      icon: '🔍',
      expanded: false,
      steps: [
        {
          id: 'step3',
          title: 'الخطوة 3: عمل Research للمواضيع الـ Viral',
          items: [
            { id: '3-1', text: 'البحث عن الـ niche بتاعك على Instagram Reels', checked: false },
            { id: '3-2', text: 'مشاهدة الفيديوهات آخر 3 شهور', checked: false },
            { id: '3-3', text: 'تحديد الفيديوهات اللي جابت أكتر من 1M views على Instagram', checked: false },
            { id: '3-4', text: 'البحث عن الـ niche بتاعك على TikTok Creative Centre', checked: false },
            { id: '3-5', text: 'مشاهدة الفيديوهات آخر 3 شهور على TikTok', checked: false },
            { id: '3-6', text: 'تحديد الفيديوهات اللي جابت أكتر من 1M views على TikTok', checked: false },
            { id: '3-7', text: 'إعطاء الـ AI كل المعلومات عنك (البيرسونا - المجال - البوزيشن)', checked: false },
            { id: '3-8', text: 'طلب research عن أهم المواضيع آخر 3 شهور', checked: false },
            { id: '3-9', text: 'تحديد المواضيع اللي حققت أعلى من مليون مشاهدة', checked: false },
          ],
        },
      ],
    },
    {
      id: 'phase3',
      title: 'المرحلة الثالثة: كتابة السكريبت',
      icon: '✍️',
      expanded: false,
      steps: [
        {
          id: 'step4',
          title: 'الخطوة 4: كتابة الاسكريبت',
          items: [
            { id: '4-1', text: 'كتابة الشعور اللي عاوز توصله للمشاهد', checked: false },
            { id: '4-2', text: 'التأكد إنك حاسس بالشعور ده بعد ما تخلص كتابة', checked: false },
            { id: '4-3', text: 'كتابة النقط الأساسية للموضوع', checked: false },
            { id: '4-4', text: 'اختيار الـ hook المناسب لمجالك والموضوع', checked: false },
            { id: '4-5', text: 'اختيار هيكل القصة المناسب', checked: false },
            { id: '4-6', text: 'ترتيب الـ hook والأفكار', checked: false },
            { id: '4-7', text: 'الاستعانة بـ Claude أو Gemini (اختياري)', checked: false },
            { id: '4-8', text: 'مراجعة: هل القصة تشد؟', checked: false },
            { id: '4-9', text: 'مراجعة: هل القصة مختصرة قدر الإمكان؟', checked: false },
            { id: '4-10', text: 'مراجعة: الـ hook شدني ولا لا؟', checked: false },
            { id: '4-11', text: 'مراجعة: إيه الإحساس اللي حسيته لما خلصت قراية؟', checked: false },
            { id: '4-12', text: 'إعادة صياغة أو كتابة الاسكريبت تاني لو مش حاسس بالشعور المطلوب', checked: false },
          ],
        },
      ],
    },
    {
      id: 'phase4',
      title: 'المرحلة الرابعة: التحضير للتصوير',
      icon: '🎬',
      expanded: false,
      steps: [
        {
          id: 'step5',
          title: 'الخطوة 5: تحديد زوايا وأماكن التصوير',
          items: [
            { id: '5-1', text: 'تحديد المكان المناسب (البيت - جيم - نادي - مكتب - وأنت شغال)', checked: false },
            { id: '5-2', text: 'تحديد لو محتاج B-rolls من اليوم', checked: false },
            { id: '5-3', text: 'تحديد زوايا التصوير لكل cut بناءً على القصة والهدف', checked: false },
            { id: '5-4', text: 'الاستعانة بـ Claude أو Gemini لتحديد الزوايا', checked: false },
          ],
        },
        {
          id: 'step6',
          title: 'الخطوة 6: التنظيم والجدولة',
          items: [
            { id: '6-1', text: 'تنظيم كل حاجة في Notion في جدول', checked: false },
            { id: '6-2', text: 'تحديد أيام التصوير (يوم أو يومين)', checked: false },
          ],
        },
      ],
    },
    {
      id: 'phase5',
      title: 'المرحلة الخامسة: الإنتاج',
      icon: '🎥',
      expanded: false,
      steps: [
        {
          id: 'step7',
          title: 'الخطوة 7: التصوير والمونتاج',
          items: [
            { id: '7-1', text: 'تصوير الفيديوهات حسب الجدول', checked: false },
            { id: '7-2', text: 'إدخال الفيديوهات باتشات في المونتاج', checked: false },
            { id: '7-3', text: 'مونتاج الفيديوهات', checked: false },
          ],
        },
      ],
    },
    {
      id: 'phase6',
      title: 'المرحلة السادسة: التحليل والتحسين',
      icon: '📊',
      expanded: false,
      steps: [
        {
          id: 'step8',
          title: 'الخطوة 8: تحليل الـ Insights (أسبوعياً)',
          items: [
            { id: '8-1', text: 'تحليل الـ insights باستخدام Claude', checked: false },
            { id: '8-2', text: 'معرفة أنواع الفيديوهات اللي شغالة', checked: false },
            { id: '8-3', text: 'معرفة أنواع الفيديوهات اللي مش شغالة', checked: false },
            { id: '8-4', text: 'كتابة التحسينات المطلوبة', checked: false },
            { id: '8-5', text: 'تطبيق التحسينات في الأسبوع اللي بعده', checked: false },
            { id: '8-6', text: 'تقليل الأنواع اللي مش شغالة', checked: false },
          ],
        },
      ],
    },
  ]);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('contentChecklistProgress');
    if (saved) {
      setPhases(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('contentChecklistProgress', JSON.stringify(phases));
  }, [phases]);

  const togglePhase = (phaseId: string) => {
    setPhases(phases.map(phase =>
      phase.id === phaseId ? { ...phase, expanded: !phase.expanded } : phase
    ));
  };

  const toggleItem = (phaseId: string, stepId: string, itemId: string) => {
    setPhases(phases.map(phase =>
      phase.id === phaseId
        ? {
            ...phase,
            steps: phase.steps.map(step =>
              step.id === stepId
                ? {
                    ...step,
                    items: step.items.map(item =>
                      item.id === itemId ? { ...item, checked: !item.checked } : item
                    ),
                  }
                : step
            ),
          }
        : phase
    ));
  };

  const calculateProgress = () => {
    const totalItems = phases.reduce(
      (acc, phase) => acc + phase.steps.reduce((stepAcc, step) => stepAcc + step.items.length, 0),
      0
    );
    const checkedItems = phases.reduce(
      (acc, phase) =>
        acc +
        phase.steps.reduce(
          (stepAcc, step) => stepAcc + step.items.filter(item => item.checked).length,
          0
        ),
      0
    );
    return totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
  };

  const resetProgress = () => {
    if (confirm('هل أنت متأكد من إعادة تعيين كل التقدم؟')) {
      setPhases(phases.map(phase => ({
        ...phase,
        steps: phase.steps.map(step => ({
          ...step,
          items: step.items.map(item => ({ ...item, checked: false })),
        })),
      })));
    }
  };

  const progress = calculateProgress();

  return (
    <div className="app">
      <header className="header">
        <h1>📋 دليل إنشاء المحتوى الشامل</h1>
        <p className="subtitle">خطوة بخطوة نحو محتوى احترافي وجذاب</p>
      </header>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">التقدم الكلي</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <button className="reset-button" onClick={resetProgress}>
          إعادة تعيين التقدم
        </button>
      </div>

      <div className="phases-container">
        {phases.map(phase => {
          const phaseTotal = phase.steps.reduce((acc, step) => acc + step.items.length, 0);
          const phaseChecked = phase.steps.reduce(
            (acc, step) => acc + step.items.filter(item => item.checked).length,
            0
          );
          const phaseProgress = phaseTotal > 0 ? Math.round((phaseChecked / phaseTotal) * 100) : 0;

          return (
            <div key={phase.id} className="phase-card">
              <div className="phase-header" onClick={() => togglePhase(phase.id)}>
                <div className="phase-title-section">
                  <span className="phase-icon">{phase.icon}</span>
                  <h2 className="phase-title">{phase.title}</h2>
                </div>
                <div className="phase-header-right">
                  <span className="phase-progress">{phaseProgress}%</span>
                  {phase.expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>

              {phase.expanded && (
                <div className="phase-content">
                  {phase.steps.map(step => (
                    <div key={step.id} className="step-section">
                      <h3 className="step-title">{step.title}</h3>
                      <div className="items-list">
                        {step.items.map(item => (
                          <div
                            key={item.id}
                            className={`checklist-item ${item.checked ? 'checked' : ''}`}
                            onClick={() => toggleItem(phase.id, step.id, item.id)}
                          >
                            {item.checked ? (
                              <CheckCircle2 className="checkbox-icon checked" size={20} />
                            ) : (
                              <Circle className="checkbox-icon" size={20} />
                            )}
                            <span className="item-text">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <p>💡 الاستمرارية والالتزام بالخطوات أساس النجاح</p>
        <p>📈 التحليل الأسبوعي يساعدك تتحسن باستمرار</p>
        <p>🤖 الـ AI أداة مساعدة مش بديل عن إبداعك</p>
      </footer>
    </div>
  );
}

export default App;
