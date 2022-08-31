import 'package:flutter_app/main.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  // Define a test. The TestWidgets function also provides a WidgetTester
  // to work with. The WidgetTester allows building and interacting
  // with widgets in the test environment.
  testWidgets('MyApp says "Hello World!"', (tester) async {
    // Create the widget by telling the tester to build it.
    await tester.pumpWidget(MyApp());
    await tester.pumpAndSettle();

    // Create the Finders.
    final messageFinder = find.text('Hello world!');

    // Use the `findsOneWidget` matcher provided by flutter_test to
    // verify that the Text widgets appear exactly once in the widget tree.
    expect(messageFinder, findsOneWidget);
  });
}
