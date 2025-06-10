using System.Text;

namespace ShirtHomework
{
    internal class Shirt {
        public string color { get; set; }
        public string pattern { get; set; }

        public override string? ToString() {
            return $"{color ?? "color unknown"}:{pattern ?? "pattern unknown"}";
        }
    }
    internal class CreateShirts {
        public CreateShirts() {
            List<string> colors = new List<string>() { "red", "green", "blue" };
            List<string> patterns = new List<string>() { "stripe", "circle", "square" };
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < colors.Count; i++) {
                for (int j = 0; j < patterns.Count; j++) {
                    Shirt shirt = new Shirt() { color = colors[i], pattern = patterns[j] };
                    sb.Append($"{shirt.ToString()}\n");
                }
            }
            Console.WriteLine(sb);
        }

        static void Main(string[] args)
        {
            new CreateShirts();
        }
    }
}
